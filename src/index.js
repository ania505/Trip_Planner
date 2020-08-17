console.log('Hello from JavaScript');

import mapboxgl from "mapbox-gl";
import buildMarker from "marker.js";

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pYTUwNSIsImEiOiJja2R5cHY5YWQwbWxqMnpvZ3Y5MDR2dmdwIn0.6y23xrVPlTAb3bSsCp9tsA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const mapMarker = document.createElement('div')
mapMarker.style.width = "32px";
mapMarker.style.height = "39px";
mapMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(mapMarker).setLngLat([-74.009151, 40.705086]).addTo(map);

const marker = buildMarker(action, coordinates);