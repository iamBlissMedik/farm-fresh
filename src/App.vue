<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import LandingPage from "./components/LandingPage.vue";
</script>

<template>
  <div class=" w-screen">
    <Navbar />
    <div class="lg:px-[121px] px-[30px]">
      <main class="py-20">
        <LandingPage/>
      </main>
      <RouterView />
    </div>
  </div>
</template>
