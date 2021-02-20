<template>
  <button class="toogle-sidebar mx-4" @click.prevent="toogleCompact">
    <svg
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      height="20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  </button>
</template>
<script>
import { store, mutations } from '~/store/sidebar.js'

export default {
  // data() {
  //   return {
  //     toogleAsideCompact: true,
  //   }
  // },
  computed: {
    toogleAsideCompact() {
      return store.toogleAsideCompact
    },
  },
  methods: {
    toogleCompact() {
      mutations.toggleNav()
      // const sidebar = document.getElementById('aside')
      store.toogleAsideCompact
        ? document.documentElement.classList.add('aside-compact')
        : document.documentElement.classList.remove('aside-compact')
    },
  },
}
</script>
