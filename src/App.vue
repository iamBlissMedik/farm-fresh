<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";



</script>

<template>
  <div class=" w-screen">
    <Navbar />
    <div >

      <RouterView />
    </div>


  </div>
</template>
