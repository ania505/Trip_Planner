import mapboxgl from "mapbox-gl";

export const buildMarker(action, coordinates) => {
    if (action === 'activity') {
        const activity = document.createElement("div");
        activity.style.width = "32px";
        activity.style.height = "39px";
        activity.style.backgroundImage = "http://i.imgur.com/WbMOfMl.png";
        new mapboxgl.Marker(activity).setLngLat(coordinates).addTo(map);
    }
    if (action === 'hotel') {
        const hotel = document.createElement("div");
        hotel.style.width = "32px";
        hotel.style.height = "39px";
        hotel.style.backgroundImage = "http://i.imgur.com/D9574Cu.png";
        new mapboxgl.Marker(hotel).setLngLat(coordinates).addTo(map);
    }
    if (action === 'restaurant') {
        const restaurant = document.createElement("div");
        restaurant.style.width = "32px";
        restaurant.style.height = "39px";
        restaurant.style.backgroundImage = "http://i.imgur.com/cqR6pUI.png";
        new mapboxgl.Marker(restaurant).setLngLat(coordinates).addTo(map);
    }
}