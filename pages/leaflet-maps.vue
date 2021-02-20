<template>
  <div class="flex flex-col">
    <div class="text-xs uppercase font-light text-gray-500">Maps</div>
    <h1>Leaflet Maps</h1>
    <div
      class="my-4 p-4 bg-white rounded-lg shadow-xs grid md:grid-cols-2 gap-4"
    >
      <div class="w-full h-64 relative">
        <leaflet-map class="w-full h-full" />
      </div>
      <div class="w-full h-64 relative">
        <leaflet-map-two class="w-full h-full" />
      </div>
      <div class="w-full h-64 relative">
        <leaflet-map-three class="w-full h-full" />
      </div>
      <div class="w-full h-64 relative">
        <leaflet-map-four class="w-full h-full" />
      </div>
      <div class="w-full h-64 relative">
        <leaflet-map-five class="w-full h-full" />
      </div>
      <div class="w-full h-64 relative">
        <leaflet-map-six class="w-full h-full" />
      </div>
    </div>
  </div>
</template>
