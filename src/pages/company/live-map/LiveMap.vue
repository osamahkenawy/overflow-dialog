<template>
  <v-app>
    <v-container fluid class="pa-0 fullWidthAndHeight">
      <!-- Main content including the map -->
      <div class="d-flex fill-height">
        <div class="fullWidthAndHeight">
          <location-map class="map-container" />
        </div>
      </div>
    </v-container>

    <!-- Sidebar overlay positioned on top of the map -->
    <SubSidebar class="sidebar-overlay">
      <p>Content inside the sidebar!</p>
    </SubSidebar>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const sidebarOpen = ref(true); // Track sidebar visibility 
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
