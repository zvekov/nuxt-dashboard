<template>
  <simplebar class="h-screen" data-simplebar-auto-hide="true">
    <div
      class="antialiased font-sans text-sm text-gray-900 dark:text-white flex flex-col w-full h-full min-h-screen bg-body dark:bg-gray-700 z-0"
    >
      <div class="relative flex flex-row flex-auto">
        <div class="wrapper">
          <div
            class="main w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:bg-gray-900 dark:text-white"
          >
            <div class="w-full p-4 bg-gray-100 min-h-screen flex items-center justify-center">
              <nuxt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </simplebar>
</template>

<script>
import simplebar from "simplebar-vue";

export default {
  name: "AuthLayout",
  components: { simplebar }
};
</script>
