import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: process.env.YANDEXMAP_API_KEY,
  lang: 'en_US',
  coordorder: 'latlong',
  version: '2.1',
}

Vue.use(YmapPlugin, settings)
