<template>
  <client-only>
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" />
      <l-marker :lat-lng="marker" />
    </l-map>
  </client-only>
</template>

<script>
let Vue2Leaflet = {}
if (process.client) Vue2Leaflet = require('vue2-leaflet')

export default {
  components: {
    'l-map': Vue2Leaflet.LMap,
    'l-tile-layer': Vue2Leaflet.LTileLayer,
    'l-marker': Vue2Leaflet.LMarker,
  },
  data() {
    return {
      zoom: 14,
      path: '/images/',
      center: [47.41322, -1.219482],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      marker: process.client ? L.latLng(47.41322, -1.219482) : null,
    }
  },
}
</script>
