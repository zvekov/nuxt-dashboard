<template>
  <div class="flex flex-col">
    <div class="text-xs uppercase font-light text-gray-500">UI Elements</div>
    <h1>Inputs</h1>
    <div
      class="my-4 p-4 bg-white rounded-lg shadow-xs grid md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      <ui-input-float :label="'Float Label'" :required="false" />
    </div>
  </div>
</template>
