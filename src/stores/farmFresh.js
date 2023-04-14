import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useFarmFreshStore = defineStore("farmFresh", () => {
  const hamburger = ref(true);
  return {
    hamburger,
  };
});
