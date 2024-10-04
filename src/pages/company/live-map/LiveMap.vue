<template>
  <v-app>
    <!-- Breadcrumbs Section -->
    <!-- Main Container for Map and Sidebar -->
    <v-container fluid class="pa-0 main-container">
      <div class="d-flex h-100 position-relative">
        <!-- Map Section -->
        <location-map class="map-container" />

        <!-- Reusable SubSidebar Component -->
        <SubSidebar v-model="sidebarVisible">
          <!-- Passing the body of the sidebar from the main component -->
          <v-text-field
            v-model="address"
            label="Enter Address"
            placeholder="Enter address"
            @change="fetchCoordinates"
          />
          <div  style="margin: 20px !important;">
            <uae-plate 
             :plateColor="'#99644C'"
             :plateNumber="'AD-10-7489'"
             :flate="true"  
            />
          </div>
          <chip  style="margin: 20px !important;" :content="`${'AED'} ${101}`"
                      :textColor="'#175CD3'"
                      :borderColor="'#007BFF'"
                      :headerBackgroundColor="'#EFF8FF'"
                    />
        </SubSidebar>
      </div>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'; // Use Axios for API calls
import { useI18n } from 'vue-i18n';


const { t } = useI18n();

const address = ref('');
const sidebarVisible = ref(true);
const isCollapsed = ref(false);
const panelMargin = ref('0px');

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
    console.error('Error fetching coordinates:', error);
  }
};

const redirectToLocation = (lat, lon) => {
  document.dispatchEvent(new CustomEvent('move-map', { detail: { lat, lon } }));
};

onMounted(() => {
  panelMargin.value = '0px'; // Start with an expanded sidebar
});
</script>

<style scoped>
.breadcrumbs-row {
  background-color: white;
  padding: 8px;
  z-index: 1; /* Ensures breadcrumbs stay above other elements */
}

.main-container {
  height: calc(100vh - 50px); /* Adjust based on breadcrumbs height */
  overflow: hidden;
}

.d-flex {
  display: flex;
}

.h-100 {
  height: 100%;
}

.map-container {
  flex-grow: 1;
  height: 100%;
  width: 100%;
}
</style>
