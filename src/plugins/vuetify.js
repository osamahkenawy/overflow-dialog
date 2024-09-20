// src/plugins/vuetify.js
import 'vuetify/styles'; // Import Vuetify styles
import { createVuetify } from 'vuetify';

const customTheme = {
  dark: false, // Optional: choose light or dark mode
  colors: {
    primary: '#1976D2', // Define primary color
    secondary: '#424242',
    customColor1: '#E91E63', // Optional custom color
    customColor2: '#9C27B0', // Optional custom color
  },
};

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'customTheme', // Set the default theme
    themes: {
      customTheme, // Register your custom theme
    },
  },
});

export default vuetify;
