// yarn add vue-yandex-maps
<template>
  <yandex-map
    id="map"
    class="w-full h-full"
    :coords="coords"
    :zoom="10"
    :scroll-zoom="false"
  >
    <ymap-marker marker-id="121" :coords="coords" :icon="markerIcon" />
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
    coords: [54.82896654088406, 49.831893822753904],
    markerIcon: {
      layout: 'default#imageWithContent',
      imageHref: 'https://image.flaticon.com/icons/png/512/33/33447.png',
      imageSize: [43, 43],
      imageOffset: [0, 0],
      content: '123 v12',
      contentOffset: [0, 15],
      contentLayout:
        '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
    },
  }),
  methods: {
    onClick(e) {
      this.coords = e.get('coords')
    },
  },
}
</script>
