<template>
    <div class="map-container border-t-2">
      <iframe
        width="100%"
        height="300"
        :src="mapUrl"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6589.514311614388!2d28.73037231908796!3d46.02018382714777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b634b9830a43af%3A0xbdbb0779a5e18e5b!2sSRL%20Minibus-Service!5e0!3m2!1sru!2s!4v1715868847173!5m2!1sru!2s"  // Здесь должна быть ссылка на карту с вашим адресом
      };
    }
  };
  </script>
  
  <style scoped>
  .map-container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%; /* 16:9 aspect ratio (Высота карты относительно ширины) */
  }
  
  .map-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  </style>