// yarn add vue-yandex-maps
<template>
  <yandex-map
    id="map"
    class="w-full h-full"
    :coords="coords"
    :zoom="17"
    :scroll-zoom="false"
  >
    <ymap-marker marker-id="12" :coords="coords" />
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
    coords: [53.895499, 27.549501],
  }),
  methods: {
    onClick(e) {
      this.coords = e.get('coords')
    },
  },
}
</script>
