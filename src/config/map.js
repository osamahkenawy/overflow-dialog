const mapConfig = {
    center: {
      lat: 24.4539,
      lng: 54.3773,
    },
    zoom: 6,
    tileLayerUrl: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    tileLayerOptions: {
      minZoom: 6,
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">Wiot360</a>',
    },
    iconSettings: {
      iconSize: [30, 30],
      iconAnchor: [15, 30], // Set the anchor point to the bottom center of the icon
      popupAnchor: [-3, -30], // Adjust the popup anchor based on your needs
      shadowSize: [60, 30],
      popupAnchor: [-3, -30], // Adjust the popup anchor based on your needs

    }
  };
  
  export default mapConfig;
  