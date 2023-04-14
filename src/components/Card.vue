<script setup>
const getImageURL = (i) => new URL(i, import.meta.url);
const props = defineProps([
  "backGround",
  "icon",
  "text",
  "smallBackground",
  "image",
]);
</script>
<template>
  <!-- card 1 -->
  <div
    class="w-[300px] h-[300px] rounded-[20px] pt-5 pl-[27px]"
    :class="backGround"
  >
    <!-- icon -->
    <div class="w-[80px] h-[80px] flex justify-center items-center mb-5">
      <img :src="getImageURL(icon)" :alt="text" />
    </div>
    <!-- text -->
    <div class="font-semibold h-6 mb-[30px]">
      <h1>{{ text }}</h1>
    </div>
    <!-- last icon -->
    <div class="h-[126px] flex justify-end">
      <div
        class="w-[126px] h-[126px] flex justify-end items-end rounded-[20px] relative"
      >
        <!-- svg -->
        <div class="h-[116px] w-[116px]" :class="smallBackground"></div>
        <!-- img -->
        <div class="absolute top-0 right-3">
          <img :src="getImageURL(image)" :alt="text" class="rounded-[20px]" />
        </div>
      </div>
    </div>
  </div>
</template>
