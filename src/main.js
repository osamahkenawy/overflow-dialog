import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Import your Vuetify setup

// Router
import router from './router';

// Components
import SubSidebar from './components/sidebars/SubSidebar.vue';
// Maps
import LocationMap from './components/maps/LocationMap.vue';

// Styles
import "@mdi/font/css/materialdesignicons.css";  // Material Design CSS For (Icons)
import 'leaflet/dist/leaflet.css';  // Leaflet CSS

const app = createApp(App);
app.use(router);
// Globally register the component
app.component('SubSidebar', SubSidebar);
app.component('location-map', LocationMap);

app.use(vuetify); // Register Vuetify if you're using it
app.mount('#app');
