<template>
    <div id="add-map" class="full-map"></div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import L from 'leaflet';
  
  export default {
    name: 'LocationMap',
    setup() {
      onMounted(() => {
        // Ensure the map is only initialized once
        if (!L.DomUtil.get('add-map')._leaflet_id) {
          // Initialize the map
          const map = L.map('add-map').setView([51.505, -0.09], 13);
  
          // Set up the tile layer from OpenStreetMap
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
          }).addTo(map);
  
          // Optional: You can add event listeners to the map if needed
          map.on('click', function (e) {
            const marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
          });
        }
      });
  
      return {};
    },
  };
  </script>
  
  <style scoped>
  .full-map {
    width: 100%;
    height: 100%;
  }
  </style>
  