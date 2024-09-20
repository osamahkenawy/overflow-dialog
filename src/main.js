import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Import your Vuetify setup

// Import your component globally
import SubSidebar from './components/sidebars/SubSidebar.vue';

const app = createApp(App);

// Globally register the component
app.component('SubSidebar', SubSidebar);

app.use(vuetify); // Register Vuetify if you're using it
app.mount('#app');
