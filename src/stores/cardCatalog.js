import { ref } from "vue";
import { defineStore } from "pinia";

export const usecardCatalogStore = defineStore("cardCatalog", () => {
  const catalogs = ref([
    {
      backGround: "bg-dairy_lgBg",
      icon: "../assets/dairy-image-vec.svg",
      text: "dairy products",
      smallBackGround: "bg-dairy_smBg",
      image: "../assets/dairy-img.jpg",
    },
    {
      backGround: "bg-meat_lgBg",
      icon: "../assets/meat-icon.svg",
      text: "meat",
      smallBackGround: "bg-meat_smBg",
      image: "../assets/meat-img.jpg",
    },
    {
      backGround: "bg-vegetable_lgBg",
      icon: "../assets/vegetable-icon.svg",
      text: "vegetable",
      smallBackGround: "bg-vegetable_smBg",
      image: "../assets/vegetable-img.jpg",
    },
  ]);
  return {
    catalogs,
  };
});
