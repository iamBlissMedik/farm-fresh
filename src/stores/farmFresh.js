import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useFarmFreshStore = defineStore("farmFresh", () => {
  const hamburger = ref(false);
  return {
    hamburger,
  };
});
