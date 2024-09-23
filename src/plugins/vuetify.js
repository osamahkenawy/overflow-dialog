// src/plugins/vuetify.js
import 'vuetify/styles'; // Import Vuetify styles
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi'; // Import MDI icon set


const customTheme = {
  dark: false, // Optional: choose light or dark mode
  colors: {
    primary: '#244066', // Define primary color
    secondary: '#F2421B',
    customColor1: '#E91E63', // Optional custom color
    customColor2: '#9C27B0', // Optional custom color
  },
  variables: {
    primary: '#244066'
  },
  

};

// Create Vuetify instance
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme,
    },
    variables: true, // Enable CSS variables
  },
  icons: {
    defaultSet: 'mdi', // Set MDI as the default icon set
    aliases, // Use aliases for icons
    sets: {
      mdi, // Use the MDI icon set
    },
  },
});

export default vuetify;
