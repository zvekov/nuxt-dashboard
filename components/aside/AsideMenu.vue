<!--TODO Dockable navigation for Aside Compact Mode-->
<template>
  <transition name="right-left">
    <aside @mouseleave="hover = false"
           @mouseover="hover = true"
           v-show="isAsideVisible" class="aside is-placed-left is-expanded">
      <simplebar
        class="h-full overflow-x-hidden"
        :class="{ active: hover }"
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
import { mapState } from "vuex";
import AsideTools from "@/components/aside/AsideTools";
import AsideMenuList from "@/components/aside/AsideMenuList";
import simplebar from "simplebar-vue";

export default {
  name: "AsideMenu",
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      hover: false
    };
  },
  components: { AsideTools, AsideMenuList, simplebar },
  computed: {
    ...mapState(["isAsideVisible"])
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    menuClick(item) {
      //
    }
  }
};
</script>
<style lang="postcss">
aside {
  @apply transform transition-all duration-150;
}
</style>
