<template>
  <div class="flex flex-col">
    <div class="text-xs uppercase font-light text-gray-500">Maps</div>
    <h1>Yandex Maps</h1>
    <div
      class="my-4 p-4 bg-white rounded-lg shadow grid md:grid-cols-2 gap-4"
    >
      <client-only>
        <div class="w-full h-64 relative">
          <yandex-map class="border rounded-md" />
        </div>
        <div class="w-full h-64 relative">
          <yandex-map-two class="border rounded-md" />
        </div>
        <div class="w-full h-64 relative">
          <yandex-map-three class="border rounded-md" />
        </div>
        <div class="w-full h-64 relative">
          <yandex-map-four class="border rounded-md" />
        </div>
        <div class="w-full h-64 relative">
          <yandex-map-five class="border rounded-md" />
        </div>
        <div class="w-full h-64 relative">
          <yandex-map-six class="rounded-md" />
        </div>
      </client-only>
    </div>
  </div>
</template>
