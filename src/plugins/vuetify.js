// src/plugins/vuetify.js
import 'vuetify/styles'; // Import Vuetify styles
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi'; // Import MDI icon set


const customTheme = {
  dark: false, // Optional: choose light or dark mode
  colors: {
    primary: '#244066', // primary color
    secondary: '#F2421B',
    third: '#F3F8FF', // third custom color
    white: '#FFFF'
  },
  variables: {
    primary: '#244066',
    secondary: '#F2421B',
    third: '#F3F8FF', // third custom color
     white: '#FFFF'
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
