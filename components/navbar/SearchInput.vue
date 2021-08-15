<template>
  <form class="w-full max-w-xs navbar-search">
    <div class="relative">
      <input
        type="search"
        name="search"
        placeholder="Search..."
        class="pl-10 pr-5 appearance-none h-10 w-full rounded-full text-sm border border-gray-200 focus:outline-none focus:border-green-500"
      />
      <button type="submit" class="absolute top-0 mt-3 left-0 ml-4">
        <SearchButton class="stroke-current h-4 w-4" />
      </button>
    </div>
  </form>
</template>
<script>
import SearchButton from '~/assets/svg/SearchButton.svg?inline'
export default {
  components: { SearchButton },
}
</script>
