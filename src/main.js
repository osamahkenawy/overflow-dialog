import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

// Router
import router from './router';

// I18n
import { createI18n } from 'vue-i18n';

// Import messages from the locales/index.js file
import messages from './locales';

import OverflowDialog from '@/components/dialogs/OverflowDialog.vue';
// Styles
import "@mdi/font/css/materialdesignicons.css";  // Material Design CSS For (Icons)
import 'leaflet/dist/leaflet.css';  // Leaflet CSS

// Set up Vue I18n
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

const app = createApp(App);

// Use Router
app.use(router);

// Use Vuetify
app.use(vuetify);

// Use I18n
app.use(i18n);


//Dialog
app.component('overflow-dialog', OverflowDialog)




// Mount the app
app.mount('#app');
