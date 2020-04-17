import React from 'react';
import Helmet from 'react-helmet';
import L from 'leaflet';
import axios from 'axios';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Map from 'components/Map';

const LOCATION = {
  lat: 15,
  lng: 0,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 2.5;

const IndexPage = () => {
  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  async function mapEffect({ leafletElement: map } = {}) {
    let response;

    //Try to pull the info, if no info then show an error message
    try {
      response = await axios.get( 'https://corona.lmao.ninja/v2/countries' );
    } catch ( e ) {
      console.log( `Failed to fetch countries: ${e.message}`, e );
      return;
    }

    //Create an array for the data and confirm that it has values in it and is an array
    const { data = [] } = response;
    const hasData = Array.isArray( data ) && data.length > 0;

    //If not an array or no data, exit
    if ( !hasData ) return;

    const geoJson = {
      type: 'FeatureCollection',
      features: data.map(( country = {}) => {
        const { countryInfo = {} } = country;
        const { lat, long: lng, flag } = countryInfo;
        return {
          type: 'Feature',
          properties: {
            ...country,
            flag,
          },
          geometry: {
            type: 'Point',
            coordinates: [lng, lat],
          },
        };
      }),
    };

    const geoJsonLayers = new L.GeoJSON( geoJson, {
      pointToLayer: ( feature = {}, latlng ) => {
        const { properties = {} } = feature;
        let updatedFormatted;
        let casesString;

        const {
          country,
          flag,
          updated,
          cases,
          casesPerOneMillion,
          deaths,
          deathsPerOneMillion,
          recovered,
          active,
          critical,
          tests,
          testsPerOneMillion,
        } = properties;

        casesString = `${cases}`;

        if ( cases > 1000000 ) {
          casesString = `${casesString.slice( 0, -3 )}M+`;
        } else if ( cases > 1000 ) {
          casesString = `${casesString.slice( 0, -3 )}k+`;
        }

        if ( updated ) {
          updatedFormatted = new Date( updated ).toLocaleString();
        }

        const html = `
          <span class="icon-marker">
            ${casesString}
          </span>
        `;

        const stats = `
        <span class="icon-marker-tooltip">
          <h2><img src="${flag}" alt="flags"> ${country}</h2>
          <ul>
            <li><strong>Confirmed:</strong> ${cases.toLocaleString()}</li>
            <li><strong>Cases per Million</strong> ${casesPerOneMillion.toLocaleString()}</li>
            <li><strong>Deaths:</strong> ${deaths.toLocaleString()}</li>
            <li><strong>Deaths per Million</strong> ${deathsPerOneMillion.toLocaleString()}</li>
            <li><strong>Recovered: </strong>${recovered.toLocaleString()}</li>
            <li><strong>Active Cases:</strong> ${active.toLocaleString()}</li>
            <li><strong>Critical Cases:</strong> ${critical.toLocaleString()}</li>
            <li><strong>Tested:</strong> ${tests.toLocaleString()}</li>
            <li><strong>Tested per Million:</strong> ${testsPerOneMillion.toLocaleString()}</li>
            <li><strong>Last Update:</strong> ${updatedFormatted.toLocaleString()}</li>
          </ul>
          </span>
          `;

        const popup = L.popup({
          maxWidth: 400,
        }).setContent( stats );

        return L.marker( latlng, {
          icon: L.divIcon({
            className: 'icon',
            html,
          }),
          riseOnHover: true,
        }).bindPopup( popup );
      },
    });

    geoJsonLayers.addTo( map );
  }

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: 'Mapbox',
    zoom: DEFAULT_ZOOM,
    mapEffect,
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>COVID19 Map</title>
      </Helmet>

      <Map {...mapSettings}></Map>

      <Container type="content" className="text-center home-start">
        <h2>See Spread of COVID19 around the World</h2>
      </Container>
    </Layout>
  );
};

export default IndexPage;
