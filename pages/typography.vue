<template>
  <div class="flex flex-col">
    <div class="text-xs uppercase font-light text-gray-500">UI Elements</div>
    <h1>Typography</h1>
    <div
      class="my-4 p-4 bg-white rounded-lg shadow-xs grid md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      <div>
        <h1>H1 example</h1>
        <div class="mt-1 mb-3">
          <span class="bg-gray-200 px-1 rounded-md">
            @apply text-2xl font-bold;</span
          >
        </div>
        <h2>H2 example</h2>
        <div class="mt-1 mb-3">
          <span class="bg-gray-200 px-1 rounded-md"
            >@apply text-xl font-bold;</span
          >
        </div>
        <h3>H3 example</h3>
        <div class="mt-1 mb-3">
          <span class="bg-gray-200 px-1 rounded-md"
            >@apply text-lg font-bold;</span
          >
        </div>
        <h4>H4 example</h4>
        <div class="mt-1 mb-3">
          <span class="bg-gray-200 px-1 rounded-md"
            >@apply text-base font-bold;</span
          >
        </div>
        <h5>H5 example</h5>
        <div class="mt-1 mb-3">
          <span class="bg-gray-200 px-1 rounded-md"
            >@apply text-sm font-bold;</span
          >
        </div>
      </div>
      <div>
        <div class="font-thin">'Nunito', sans-serif</div>
        <div class="mt-1 mb-3">
          <span class="bg-gray-200 px-1 rounded-md"
            >@apply font-sans font-thin;</span
          >
        </div>
        <div class="font-light">'Nunito', sans-serif</div>
        <div class="mt-1 mb-3">
          <span class="bg-gray-200 px-1 rounded-md"
            >@apply font-sans font-light;</span
          >
        </div>
        <div class="font-normal">'Nunito', sans-serif</div>
        <div class="mt-1 mb-3">
          <span class="bg-gray-200 px-1 rounded-md"
            >@apply font-sans font-normal;</span
          >
        </div>
        <div class="font-semibold">'Nunito', sans-serif</div>
        <div class="mt-1 mb-3">
          <span class="bg-gray-200 px-1 rounded-md"
            >@apply font-sans font-semibold;</span
          >
        </div>
        <div class="font-bold">'Nunito', sans-serif</div>
        <div class="mt-1 mb-3">
          <span class="bg-gray-200 px-1 rounded-md"
            >@apply font-sans font-bold;</span
          >
        </div>
        <div class="font-extrabold">'Nunito', sans-serif</div>
        <div class="mt-1 mb-3">
          <span class="bg-gray-200 px-1 rounded-md"
            >@apply font-sans font-extrabold;</span
          >
        </div>
        <div class="font-black">'Nunito', sans-serif</div>
        <div class="mt-1 mb-3">
          <span class="bg-gray-200 px-1 rounded-md"
            >@apply font-sans font-black;</span
          >
        </div>
      </div>
      <div>
        <div>&#60;ul&#62;&#60;/ul&#62; List</div>
        <ul class="list-disc list-inside py-2">
          <li>Item List 1</li>
          <li>Item List 1</li>
          <li>Item List 1</li>
          <li>Item List 1</li>
          <li>Item List 1</li>
          <li>Item List 1</li>
        </ul>
        <div class="mt-1 mb-3">
          <span class="bg-gray-200 px-1 rounded-md"
            >@apply list-disc list-inside py-2;</span
          >
        </div>
        <hr class="my-4" />
        <div>&#60;ol&#62;&#60;/ol&#62; List</div>
        <ul class="list-decimal list-inside py-2">
          <li>Item List 1</li>
          <li>Item List 1</li>
          <li>Item List 1</li>
          <li>Item List 1</li>
          <li>Item List 1</li>
          <li>Item List 1</li>
        </ul>
        <div class="mt-1 mb-3">
          <span class="bg-gray-200 px-1 rounded-md"
            >@apply list-decimal list-inside py-2;</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
