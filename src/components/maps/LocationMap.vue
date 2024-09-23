<template>
  <div>
      <div class="full-map" id="map"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import "leaflet/dist/leaflet.css";
import * as L from 'leaflet';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import "leaflet.markercluster";
import { addressPoints } from '@/fakeData/fakeSavedPlaces.js'; // Sample data
import icon from '@/assets/images/map/marker-of-no-marker.png';
import markerShadow from '@/assets/images/map/markers/marker-shadow.png';
import mapConfig from '@/config/map'; // Importing the map configurations

const initialMap = ref(null);

const myIcon = L.icon({
  iconUrl: icon,
  ...mapConfig.iconSettings, // Using icon settings from config
  shadowUrl: markerShadow
});

onMounted(() => {
  // Initialize the map
  initialMap.value = L.map('map', {
    zoomControl: false, // Disable default zoom control to add custom controls
    zoom: mapConfig.zoom,
    zoomAnimation: false,
    fadeAnimation: true,
    markerZoomAnimation: true
  }).setView([mapConfig.center.lat, mapConfig.center.lng], mapConfig.zoom);

  // Add tile layer from config
  L.tileLayer(mapConfig.tileLayerUrl, mapConfig.tileLayerOptions)
    .addTo(initialMap.value);

  // Create marker cluster group
  const markers = L.markerClusterGroup();

  // Add markers
  addressPoints.forEach((element, index) => {
    const each_marker = new L.marker(
      [element.latitude, element.longitude], { icon: myIcon }
    ).bindPopup(`
      <strong>Location ${index + 1}</strong><br>
      Latitude: ${element.latitude}<br>
      Longitude: ${element.longitude}
    `);
    markers.addLayer(each_marker);
  });

  // Add the marker cluster group to the map
  initialMap.value.addLayer(markers);

  // Fit the map view to show all markers
  const bounds = L.latLngBounds(addressPoints.map(point => [point.latitude, point.longitude]));
  initialMap.value.fitBounds(bounds);

  // Add custom zoom controls
  L.control.zoom({ position: 'topright' }).addTo(initialMap.value);

  // Handle map resizing when window size changes
  const handleResize = () => {
    initialMap.value.invalidateSize();
  };
  window.addEventListener('resize', handleResize);

  // Cleanup on component unmount
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    if (initialMap.value) {
      initialMap.value.remove();
    }
  });
});
</script>

<style scoped>
.full-map {
  width: 100%;
  height: 100vh; /* Full height for the map */
  margin: 0;
  padding: 0;
}
</style>
