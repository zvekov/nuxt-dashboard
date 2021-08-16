<template>
  <div class="flex flex-col">
    <div class="text-xs uppercase font-light text-gray-500">Icons</div>
    <h1>SVG Icons</h1>
    <div
      class="my-4 p-4 bg-white rounded-lg shadow-xs grid md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      <ui-icons-svg-forms class="icon" />
    </div>
  </div>
</template>
<script>
export default {
  middleware: "authenticated"
};
</script>
<style lang="postcss">
.icon {
  @apply w-8 h-8;
}
</style>
