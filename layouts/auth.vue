<template>
  <div
    class="main w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:bg-gray-900 dark:text-white md:flex justify-end"
  >
    <div class="p-4 bg-gray-100 min-h-screen flex items-center justify-center md:w-5/12">
      <nuxt />
    </div>
  </div>
</template>

<script>
import simplebar from "simplebar-vue";

export default {
  name: "AuthLayout",
  components: { simplebar }
};
</script>
