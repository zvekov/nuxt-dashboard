<template>
  <div class="aside-tools">
    <div class="aside-tools-label">
      <div class="logo-block text-base font-semibold flex">
        <transition name="fade" appear>
          <nuxt-link
            v-if="!toogleAsideCompact"
            to="/"
            class="flex flex-row items-center justify-start"
          >
            <Logo class="logo" />
            <span class="pl-2">Nuxt Dashboard</span>
          </nuxt-link>
        </transition>
        <navbar-toogle-aside-compact
          class="hidden lg:block"
          :class="toogleAsideCompact ? 'px-1 h-8' : 'px-3'"
        />
      </div>
      <!-- <Logo />
      <slot name="label" /> -->
    </div>
  </div>
</template>

<script>
import { store } from '~/store/sidebar.js'
export default {
  name: 'AsideTools',
  props: {
    icon: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
  },
  computed: {
    toogleAsideCompact() {
      return store.toogleAsideCompact
    },
  },
}
</script>
