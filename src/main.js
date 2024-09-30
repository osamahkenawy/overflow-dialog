import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Import your Vuetify setup

// Router
import router from './router';

// I18n
import { createI18n } from 'vue-i18n';

// Import messages from the locales/index.js file
import messages from './locales';

// Components
import SubSidebar from './components/sidebars/SubSidebar.vue';
import LocationMap from './components/maps/LocationMap.vue';

// Styles
import "@mdi/font/css/materialdesignicons.css";  // Material Design CSS For (Icons)
import 'leaflet/dist/leaflet.css';  // Leaflet CSS

// Set up Vue I18n
const i18n = createI18n({
  legacy: false, // Disable legacy mode to use the Composition API
  locale: 'en', // Default locale
  fallbackLocale: 'en', // Fallback locale in case the requested one is not available
  messages, // Locale messages imported from locales/index.js
});

const app = createApp(App);

// Use Router
app.use(router);

// Use Vuetify
app.use(vuetify);

// Use I18n
app.use(i18n);

// Globally register components
app.component('SubSidebar', SubSidebar);
app.component('location-map', LocationMap);

// Mount the app
app.mount('#app');
