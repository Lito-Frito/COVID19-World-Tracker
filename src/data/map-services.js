const accessToken = process.env.GATSBY_MAPBOX_KEY;

export const mapServices = [
  {
    name: 'OpenStreetMap',
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  },

  {
      name: 'Mapbox',
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    url: `https://api.mapbox.com/styles/v1/crc8109/ck8vqm1nn12n01io6o4y9xlq2/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`
  }

];
