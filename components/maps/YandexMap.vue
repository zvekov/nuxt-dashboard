// yarn add vue-yandex-maps
<template>
  <yandex-map
    id="map"
    class="w-full h-full"
    :coords="coords"
    :zoom="4"
    :scroll-zoom="false"
  >
    <ymap-marker marker-id="1" :coords="coords" :icon="markerIcon" />
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
    coords: [52.904623, 28.030143],
    markerIcon: {
      layout: 'default#imageWithContent',
      imageHref:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Flag_of_Belarus_%281991%2C_3-2%29.svg/400px-Flag_of_Belarus_%281991%2C_3-2%29.svg.png',
      imageSize: [43, 43],
      imageOffset: [0, -40],
    },
  }),
}
</script>
