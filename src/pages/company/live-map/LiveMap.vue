<template>
  <v-app>
    <v-container fluid class="pa-0 fullWidthAndHeight">
      <div class="d-flex fill-height">
        <div class="fullWidthAndHeight">
          <location-map class="map-container" />
        </div>
      </div>
    </v-container>

    <!-- Sidebar overlay with address input -->
    <SubSidebar class="sidebar-overlay">
      
      <v-text-field
        v-model="address"
        label="Enter Address"
        placeholder="Enter address"
        @change="fetchCoordinates"
      />
    </SubSidebar>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios'; // Use Axios for API calls

const address = ref(''); // Store the entered address
const sidebarOpen = ref(true); // Track sidebar visibility

const fetchCoordinates = async () => {
  try {
    const apiUrl = `https://nominatim.openstreetmap.org/search?q=${address.value}&format=json&limit=1`;
    const response = await axios.get(apiUrl);

    if (response.data.length) {
      const { lat, lon } = response.data[0];
      redirectToLocation(lat, lon);
    } else {
      alert('Address not found');
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error);
  }
};

const redirectToLocation = (lat, lon) => {
  document.dispatchEvent(new CustomEvent('move-map', { detail: { lat, lon } }));
};
</script>

<style scoped>
.fullWidthAndHeight {
  width: 100%;
  height: 100%;
}

.fill-height {
  height: 100vh;
  width: 100%;
}

.d-flex {
  display: flex;
}

/* Map container to take up the full space */
.map-container {
  flex-grow: 1;
  height: 100%;
  width: 100%;
}

.pa-0 {
  padding: 0;
}
</style>
