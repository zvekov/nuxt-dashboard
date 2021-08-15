<template>
  <div class="navbar border-b fixed bg-white z-40">
    <div class="navbar-inner flex items-center justify-between p-3">
      <div class="grid grid-flow-col">
        <navbar-toogle-mobile-nav class="lg:hidden flex items-center" />
        <!--<navbar-toogle-aside-compact class="hidden lg:block pl-1" />-->
        <navbar-search-input class="px-3" />
      </div>
      <div class="grid grid-flow-col">
        <navbar-setting-button />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.aside-closed {
  @apply hidden;
}

.navbar {
  @apply w-full;
}

html.has-aside-mobile-expanded .aside-closed {
  @apply block fixed right-0;
}

@screen lg {
  .navbar {
    width: calc(100% - 15rem);
  }

  html.aside-compact .navbar {
    width: calc(100% - 4rem);
  }

  html.aside-compact .navbar {
    width: calc(100% - 4rem);
  }

  html.aside-compact .simplebar-track.simplebar-vertical {
    @apply opacity-0;
  }
}
</style>
