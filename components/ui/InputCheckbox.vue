<template>
  <input type="checkbox" class="input-checkbox" />
</template>

<script>
export default {
  name: "InputCheckbox"
};
</script>

<style lang="postcss">
.input-checkbox {
  @apply rounded-lg border bg-white h-4 w-4 flex-shrink inline-block align-middle mr-2;

  &:checked {
    @apply border-transparent bg-center;
    background-image: url(data:image/svg+xml,%3csvg viewBox= '0 0 16 16' fill= 'white' xmlns= 'http://www.w3.org/2000/svg' %3e%3cpath d= 'M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z' /%3e%3c/svg%3e);
    background-color: currentColor;
    background-size: 100% 100%;
    background-repeat: no-repeat;

    &:focus {
      border-color: transparent;
      background-color: currentColor;
    }
  }
}
</style>
