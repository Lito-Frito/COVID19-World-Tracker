# COVID19-World-Tracker
## Status: [![Netlify Status](https://api.netlify.com/api/v1/badges/62a2f791-f674-49bd-b88f-36094dd4bbf2/deploy-status)](https://app.netlify.com/sites/covid19-international-tracker/deploys)

This is a map app I made to track the spread of COVID19 around the world. I used a repo from  [Colby Fayock](https://github.com/colbyfayock/gatsby-starter-leaflet) to bootstrap the app by using Leaflet as a map outline. I changed the UI and the API used to a more recent iteration. I used the new API to include more relevant information for visitors.


## What This Includes
* [Yarn](https://yarnpkg.com/en/)
* [Gatsby](https://www.gatsbyjs.org/)
* [Sass](https://sass-lang.com)
* [React Helmet](https://github.com/nfl/react-helmet)
* [Resolve Src](https://github.com/alampros/gatsby-plugin-resolve-src)
* [Leaflet](https://leafletjs.com/)
* [React Leaflet](https://react-leaflet.js.org)

# Getting Started

## Requirements
* [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli)
* [Yarn](https://yarnpkg.com/en/)

## Quick Start
Run the following in your favorite terminal:
```
gatsby new [directory] https://github.com/crc8109/COVID19-World-Tracker
```

## Starting from Scratch
* Set up Yarn: https://yarnpkg.com/lang/en/docs/install/#mac-stable)[https://yarnpkg.com/lang/en/docs/install/
* Install the Gatsby CLI globally:
```
yarn global add gatsby-cli
```
* Inside the directory of your choice, scaffold a new Gatsby site:
```
gatsby new [directory] https://github.com/crc8109/COVID19-World-Tracker
```
For example, if I want my installation in `~/Code/new-gatsby-site`, I would navigate to `~/Code` and run:
```
gatsby new new-gatsby-site https://github.com/crc8109/COVID19-World-Tracker
```
* Navigate to your new directory and run:
```
yarn develop
```
* The web app should now run locally

## Troubleshooting

Personal note: Some people have had trouble when cloning this repo. If that's you, try the following commands within your terminal while in the directory of the cloned repo:

```
rm yarn.lock
yarn
gatsby develop
```


Also, make sure you get your own key to mapbox and create a .env file to store it. You can copy my design (mapbox://styles/crc8109/ck8vqm1nn12n01io6o4y9xlq2) and create your own key. Then on the CLI, type:

```
source .env
```

This will make sure that the map loads with the design from Mapbox. 
