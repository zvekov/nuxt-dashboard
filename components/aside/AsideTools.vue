<template>
  <div class="aside-tools">
    <div class="aside-tools-label">
      <div class="logo-block text-base font-semibold">
        <nuxt-link to="/" class="flex flex-row items-center justify-start">
          <Logo class="logo" />
          <span class="pl-2">Nuxt Dashboard</span>
        </nuxt-link>
      </div>
      <!-- <Logo />
      <slot name="label" /> -->
    </div>
  </div>
</template>

<script>
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
}
</script>
