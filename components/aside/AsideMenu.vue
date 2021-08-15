<!--TODO Dockable navigation for Aside Compact Mode-->
<template>
  <transition name="right-left">
    <aside v-show="isAsideVisible" class="aside is-placed-left is-expanded">
      <simplebar
        class="h-full overflow-x-hidden"
        data-simplebar-auto-hide="true"
      >
        <AsideTools :is-main-menu="true">
          <span slot="label"> Nuxt Dashboard</span>
        </AsideTools>
        <div class="menu is-menu-main pb-8">
          <template v-for="(menuGroup, index) in menu">
            <p
              v-if="typeof menuGroup === 'string'"
              :key="index"
              class="menu-label"
            >
              <span>{{ menuGroup }}</span>
            </p>
            <AsideMenuList
              v-else
              :key="index"
              :menu="menuGroup"
              @menu-click="menuClick"
            />
          </template>
        </div>
      </simplebar>
    </aside>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import AsideTools from '@/components/aside/AsideTools'
import AsideMenuList from '@/components/aside/AsideMenuList'
import simplebar from 'simplebar-vue'

export default {
  name: 'AsideMenu',
  components: { AsideTools, AsideMenuList, simplebar },
  props: {
    menu: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapState(['isAsideVisible']),
  },
  methods: {
    menuClick(item) {
      //
    },
  },
}
</script>
<style lang="postcss">
aside {
  @apply transform transition-all duration-150;
}
</style>
