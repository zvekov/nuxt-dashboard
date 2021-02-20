<template>
  <client-only>
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng">
        <l-tooltip>Hello!</l-tooltip>
      </l-marker>
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
    'l-tooltip': Vue2Leaflet.LTooltip,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 15,
      center: [53.8825, 27.5548],
      markerLatLng: [53.8825, 27.5548],
      marker: process.client ? L.latLng(53.8825, 27.5548) : null,
    }
  },
}
</script>
