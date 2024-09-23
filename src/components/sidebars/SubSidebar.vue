<template>
  <div class="sidebar-overlay" :style="{ marginLeft: panelMargin, backgroundColor: 'rgb(var(--v-theme-primary)) !important' }">
    <!-- Slot for passing content from parent -->
    <slot></slot>
    <div class="circle" @click="togglePanel">
      <v-btn elevation="2" color="secondary" icon fab dark small bottom left>
        <v-icon medium v-if="!isCollapsed">mdi-chevron-left</v-icon>
        <v-icon medium v-if="isCollapsed">mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'SubSidebar',
  setup() {
    const isCollapsed = ref(false);
    const panelMargin = ref('0px');

    // Function to toggle panel collapse/expand
    const togglePanel = () => {
      if (isCollapsed.value) {
        panelMargin.value = '0px'; // Expand the panel
      } else {
        panelMargin.value = `-${getPanelWidth()}px`; // Collapse the panel
      }
      isCollapsed.value = !isCollapsed.value;
    };

    // Function to get the panel width dynamically
    const getPanelWidth = () => {
      return document.querySelector('.sidebar-overlay').offsetWidth;
    };

    // Use onMounted to ensure DOM is fully loaded before calculating width
    onMounted(() => {
      panelMargin.value = '0px'; // Start with an expanded sidebar
    });

    return {
      isCollapsed,
      panelMargin,
      togglePanel,
    };
  },
};
</script>

<style scoped>
.sidebar-overlay {
  position: absolute; /* Ensure the sidebar is positioned above the content */
  top: 0;
  left: 0;
  width: 300px; /* Adjust the sidebar width as needed */
  height: 100vh;
  z-index: 9999; /* Ensure it stays above the map and other content */
  background-color: rgba(255, 255, 255, 0.9); /* Optional background */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3); /* Optional shadow for better visibility */
  transition: all 0.5s ease;
}

.circle {
  position: absolute;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-size: 16px;
  background-color: var(--v-theme-primary); /* Use Vuetify primary color */
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  top: calc(50% - 22px);
  left: calc(100% - 22px);
  z-index: 10000; /* Ensure the button is above the sidebar */
  cursor: pointer;
  transition: left 0.5s ease;
}

@media (max-width: 768px) {
  .sidebar-overlay {
    width: 30%; /* Adjust width for smaller screens */
  }

  .circle {
    top: 10px;
  }
}

@media (max-width: 480px) {
  .sidebar-overlay {
    width: 40%; /* Adjust width for very small screens */
  }
}
</style>
