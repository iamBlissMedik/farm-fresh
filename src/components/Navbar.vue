<script setup>
import { useFarmFreshStore } from "../stores/farmFresh";
const store = useFarmFreshStore();
const toggleHamburger = () => (store.hamburger = !store.hamburger);
</script>
<template>
  <div
    class="w-full items-center py-3 px-[30px] justify-between flex bg-white sm:h-[122px] sticky top-0 z-10  lg:px-[121px] sm:px-[10px] "
  >
    <!-- brand -->

    <div class="w-fit sm:w-[170px] md:w-[253px] ">
      <a
        href=""
        class="flex  text-3xl items-center gap-2 text-farmFresh  font-bold sm:text-xl lg:text-4xl"
      >
        <span>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.7146 3.01125C20.2242 1.12598 16.3906 0 12.4592 0C7.59779 0 3.63613 1.69545 1.59195 4.65206C0.631768 6.03976 0.100571 7.68488 0.0127575 9.53851C-0.0610975 11.107 0.185999 12.8338 0.746641 14.6869C0.774666 14.7795 0.905148 14.7811 0.937469 14.6898C3.06741 8.67817 8.58965 3.96043 15.0279 3.60766C15.1449 3.60124 15.1776 3.77795 15.0666 3.81571C13.2651 4.42873 8.54372 6.35002 5.33049 10.5121C4.40814 11.6994 3.66778 13.0171 3.13372 14.4221C2.00499 17.1073 1.41813 19.9884 1.40643 22.9C1.4062 22.9552 1.45099 23 1.5062 23H4.16817C4.22968 23 4.27716 22.9459 4.26922 22.8849C4.19819 22.3393 3.94465 19.9259 4.58672 17.1843C4.59847 17.1341 4.64682 17.101 4.6979 17.1081C5.79245 17.2601 6.89576 17.3409 8.00087 17.3499C10.6482 17.3499 12.5297 16.7776 13.9246 15.5495C15.1742 14.4494 15.8637 12.9697 16.5936 11.4051C17.7078 9.01363 18.9703 6.30436 22.6369 4.21202C22.7403 4.15307 22.8275 4.06941 22.8906 3.96853C22.9537 3.86764 22.9908 3.75269 22.9985 3.63398C23.0062 3.51526 22.9843 3.39649 22.9347 3.28831C22.8852 3.18013 22.8096 3.08592 22.7146 3.01413V3.01125Z"
              fill="#2B9348"
            />
          </svg>
        </span>
        <p>farm fresh</p></a
      >
    </div>

    <!-- NAV ITEMS -->
    <div
      class="absolute top-12 left-0 pl-8 w-full items-center  bg-white py-5 sm:relative sm:top-0  sm:flex  " :class="store.hamburger ? 'hidden' : ''"
    >
      <div
        class="text-black text-xl w-full font-normal justify-center gap-2  list-none   sm:flex  md:gap-8 sm:text-[18px] md:text-2xl "
      >
        <li class="mb-2">
          <a href="" class="font-extrabold">Home</a>
        </li>
        <li class="mb-2">
          <a href="">Locate Stores</a>
        </li>
        <li class="mb-2">
          <a href="">Catalog</a>
        </li>
        <li class="mb-2">
          <a href="">Contact</a>
        </li>
      </div>

      <!-- login -->

      <div class="w-fit sm:flex ">
        <button
          class="p-2 h-[44px] border-2 border-farmFresh rounded-[10px] text-farmFresh bg-white md:w-[187px] sm:w-[100px]  md:text-2xl "
        >
          Login
        </button>

      </div>
    </div>

    <!-- hamburger -->
    <div class="sm:hidden text-farmFresh cursor-pointer" @click="toggleHamburger">
      <div v-if="store.hamburger" >
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div v-else>
        <i class="fa fa-times" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
