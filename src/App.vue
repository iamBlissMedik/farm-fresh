<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class=" w-screen">
    <Navbar />
    <div class="px-[121px]">
      <RouterView />
    </div>
  </div>
</template>
