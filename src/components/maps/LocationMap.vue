<template>
    <div>
      <h2>Add Location</h2>
      <div id="add-map" style="height: 500px;"></div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import L from 'leaflet';
  
  export default {
    name: 'LocationMap',
    setup() {
      const markers = ref([]);
  
      onMounted(() => {
        // Initialize the map and set the view to a given place and zoom level
        const map = L.map('add-map').setView([51.505, -0.09], 13);
  
        // Set up the tile layer from OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
        }).addTo(map);
  
        // Event listener for map clicks to add markers
        map.on('click', function (e) {
          const marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
          markers.value.push({
            lat: e.latlng.lat,
            lng: e.latlng.lng,
          });
        });
      });
  
      return {
        markers,
      };
    },
  };
  </script>
  
  <style scoped>
  #add-map {
    height: 500px;
    width: 100%;
  }
  </style>
  