// yarn add vue-yandex-maps
<template>
  <yandex-map
    id="map"
    class="w-full h-full"
    :coords="coords"
    :zoom="10"
    :scroll-zoom="false"
  >
    <ymap-marker marker-id="144" :coords="coords" />
  </yandex-map>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
  components: {
    yandexMap,
    ymapMarker,
  },
  data: () => ({
    coords: [54.82896654088406, 39.831893822753904],
  }),
  methods: {
    onClick(e) {
      this.coords = e.get('coords')
    },
  },
}
</script>
