<template>
  <div>
    <button
      v-if="isAsideMobileExpanded"
      class="close h-full bg-white bg-opacity-75 flex p-4 right-0 top-0 fixed z-50 pt-4"
      @click.prevent="menuToggleMobile"
    >
      <CloseIcon class="opacity-75 mt-1 rounded-sm" />
    </button>
    <button class="toogle-sidebar mx-4" @click.prevent="menuToggleMobile">
      <BurgerIcon />
    </button>
  </div>
</template>
<script>
import { mapState } from 'vuex'

import BurgerIcon from '~/assets/svg/BurgerIcon.svg?inline'
import CloseIcon from '~/assets/svg/CloseIcon.svg?inline'

export default {
  components: { BurgerIcon, CloseIcon },
  data() {
    return {
      isMenuNavBarActive: false,
    }
  },
  computed: {
    menuNavBarToggleIcon() {
      return this.isMenuNavBarActive ? 'close' : 'dots-vertical'
    },
    menuToggleMobileIcon() {
      return this.isAsideMobileExpanded ? 'backburger' : 'forwardburger'
    },
    ...mapState(['isNavBarVisible', 'isAsideMobileExpanded', 'userName']),
  },
  methods: {
    menuToggleMobile() {
      this.$store.commit('asideMobileStateToggle')
    },
    menuNavBarToggle() {
      this.isMenuNavBarActive = !this.isMenuNavBarActive
    },
  },
}
</script>
<style lang="postcss">
.close {
  width: calc(100% - 15rem);
}
</style>
