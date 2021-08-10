<template>
  <li :class="{ 'is-active': isDropdownActive }">
    <component
      :is="componentIs"
      :to="itemTo"
      :href="itemHref"
      exact-active-class="is-active"
      :class="{ 'has-icon': !!item.icon, 'has-dropdown-icon': hasDropdown }"
      class="menu-item-label"
      @click="menuClick"
      @mouseover="hover = true"
    >
      <span class="menu-item-icon" v-html="item.icon" />
      <span
        v-if="item.label"
        :class="{ 'menu-item-label-icon': !!item.icon }"
        >{{ item.label }}</span
      >
      <ArrowBottom v-if="hasDropdown" class="ml-auto mr-4 arrow" />
    </component>
    <AsideMenuList
      v-if="hasDropdown"
      :menu="item.menu"
      :is-submenu-list="true"
    />
    <!-- <div v-if="!toogleAsideCompact && hover" class="float-menu">
          <AsideMenuList
      v-if="hover"
      :menu="item.menu"
      :is-submenu-list="true"
    />
    </div> -->
  </li>
</template>

<script>
export default {
  name: 'AsideMenuItem',
  components: {
    AsideMenuList: () => import('~/components/aside/AsideMenuList'),
    ArrowBottom: () => import('~/assets/svg/ArrowBottom.svg?inline'),
  },
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      hover: false,
      isDropdownActive: false,
    }
  },
  computed: {
    componentIs() {
      return this.item.to ? 'router-link' : 'a'
    },
    hasDropdown() {
      return !!this.item.menu
    },
    dropdownIcon() {
      return this.isDropdownActive ? 'minus' : 'plus'
    },
    itemTo() {
      return this.item.to ? this.item.to : null
    },
    itemHref() {
      return this.item.href ? this.item.href : null
    },
  },
  methods: {
    menuClick() {
      this.$emit('menu-click', this.item)

      if (this.hasDropdown) {
        this.isDropdownActive = !this.isDropdownActive
      }
    },
  },
}
</script>

<style lang="postcss">
.float-menu {
  @apply fixed -mt-10;
}
span.menu-item-icon > svg {
  width: calc(0.25rem * 16);
}
.menu-list > li.is-active > a {
  @apply text-green-600;
  &:after {
    @apply absolute top-0 bottom-0 left-0 w-1 bg-green-600 bg-opacity-100;
    content: '';
  }
}
</style>
