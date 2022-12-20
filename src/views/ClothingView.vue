<script setup>
import ProductCard from "../components/ProductCard.vue";
import { ref, onBeforeMount } from "vue";
import { useProductStore } from "../stores/product.js";
import { storeToRefs } from "pinia";

const { getProducts } = useProductStore();
const { men, women, isLoading } = storeToRefs(useProductStore());

onBeforeMount(() => {
  getProducts();
});

const section = ref("men");

const toggleWomen = () => {
  section.value = "women";
};
const toggleMen = () => {
  section.value = "men";
};
</script>

<template>
  <div class="md:p-16 p-6 w-full bg-[#F3F2EC] space-y-8">
    <div class="flex space-x-4">
      <p @click="back">Back</p>
    </div>
    <div class="md:flex xl:space-x-64 md:space-y-0 space-y-4 lg:px-16 md:px-8 px-4 items-center xl:justify-start justify-between py-4 shadow-md bg-white">
      <p class="font-bold text-2xl text-center lg:text-4xl">Clothing</p>
      <div class="flex xl:space-x-16 md:space-x-6 justify-center">
        <p
          class="lg:text-lg font-semibold lg:px-3 px-2 py-2 rounded-lg cursor-pointer"
          :class="section === 'men' ? 'bg-[#0CB5BE] text-white' : 'gb-white'"
          @click="toggleMen"
        >
          Men's Clothing
        </p>
        <p
          class="lg:text-lg font-semibold px-3 py-2 rounded-lg cursor-pointer"
          :class="section === 'women' ? 'bg-[#0CB5BE] text-white' : 'gb-white'"
          @click="toggleWomen"
        >
          Women's Clothing
        </p>
      </div>
    </div>
    <div
      v-if="isLoading"
      class="
        grid
        xl:grid-cols-4
        lg:grid-cols-3
        md:grid-cols-2
        grid-cols-1
        lg:gap-16
        gap-8
        xl:px-16
      "
    >
      <div v-for="index in 4" :key="index"><span class="loader"></span></div>
    </div>
    <div
      v-else-if="section === 'men'"
      class="
        grid
        xl:grid-cols-4
        lg:grid-cols-3
        md:grid-cols-2
        grid-cols-1
        lg:gap-16
        gap-8
        xl:px-16
      "
    >
      <router-link
        :to="{ name: 'clothing-details', params: { id: prod.id } }"
        v-for="prod in men"
        :key="prod.id"
        class="cursor-pointer"
        ><ProductCard
          :category="prod.category"
          :title="prod.title"
          :image="prod.image"
          :price="prod.price"
      /></router-link>
    </div>
    <div
      v-else-if="section === 'women'"
      class="
        grid
        xl:grid-cols-4
        lg:grid-cols-3
        md:grid-cols-2
        grid-cols-1
        lg:gap-16
        gap-8
        xl:px-16
      "
    >
    <router-link
        :to="{ name: 'clothing-details', params: { id: prod.id } }"
        v-for="prod in women"
        :key="prod.id"
        class="cursor-pointer"
        ><ProductCard
          :category="prod.category"
          :title="prod.title"
          :image="prod.image"
          :price="prod.price"
      /></router-link>
    </div>
  </div>
</template>

<style scoped>
.loader {
  width: 250px;
  height: 400px;
  display: block;
  margin: auto;
  position: relative;
  box-sizing: border-box;
}
.loader::after {
  content: "";
  width: calc(100%);
  height: calc(100%);
  top: 15px;
  left: 15px;
  position: absolute;
  background-image: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.5) 50%,
      transparent 100%
    ),
    linear-gradient(#ddd 100px, transparent 0),
    linear-gradient(#ddd 16px, transparent 0),
    linear-gradient(#ddd 50px, transparent 0);
  background-repeat: no-repeat;
  background-size: 75px 175px, 100% 100px, 100% 16px, 100% 30px;
  background-position: -185px 0, center 0, center 115px, center 142px;
  box-sizing: border-box;
  animation: animloader 1s linear infinite;
}

@keyframes animloader {
  to {
    background-position: 185px 0, center 0, center 115px, center 142px;
  }
}
</style>