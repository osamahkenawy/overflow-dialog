<template>
  <v-navigation-drawer
    v-model="visible"
    app
    width="400"
    right
    temporary
    class="sidebar-overlay"
  >
    <!-- Slot for passing the content of the sidebar -->
    <slot></slot>

    <!-- Toggle Sidebar Button -->
    <div class="circle" @click="toggleSidebar">
      <v-btn elevation="2" color="secondary" icon fab dark small>
        <v-icon v-if="visible">mdi-chevron-right</v-icon>
        <v-icon v-else>mdi-chevron-left</v-icon>
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'SubSidebar',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const visible = ref(props.modelValue);

    const toggleSidebar = () => {
      visible.value = !visible.value;
      emit('update:modelValue', visible.value);
    };

    return {
      visible,
      toggleSidebar,
    };
  },
};
</script>

<style scoped>
.sidebar-overlay {
  position: absolute; /* Ensure the sidebar is positioned above the content */
  top: 0;
  right: 0;
  width: 400px; /* Adjust the sidebar width as needed */
  height: 100vh;
  z-index: 9999; /* Ensure it stays above the map and other content */
  background-color: rgba(255, 255, 255); /* Optional background */
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
</style>
