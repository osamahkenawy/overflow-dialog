import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Import your Vuetify setup

// Router
import router from './router';

// Import your component globally
import SubSidebar from './components/sidebars/SubSidebar.vue';
import "@mdi/font/css/materialdesignicons.css";
// import 'vuetify/styles'

const app = createApp(App);
app.use(router);
// Globally register the component
app.component('SubSidebar', SubSidebar);

app.use(vuetify); // Register Vuetify if you're using it
app.mount('#app');
