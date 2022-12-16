<script setup>
import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/product";
import ProductCard from "../components/ProductCard.vue";
import { onMounted } from "vue";

const { isLoading, electronics } = storeToRefs(useProductStore());
const { getProducts } = useProductStore();

onMounted(() => {
  getProducts();
});
</script>

<template>
  <div class="p-16 w-full bg-white bg-[#F3F2EC] space-y-8">
    <div class="flex space-x-4">
      <router-link to="/home">Home</router-link>
      <p>>></p>
      <p>Electronics</p>
    </div>
    <div class="text-center px-16 py-4 shadow-md bg-white">
      <p class="font-bold text-4xl">Electronics</p>
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
      v-else
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
        :to="{ name: 'electronics-details', params: { id: prod.id } }"
        v-for="prod in electronics"
        :key="prod.id"
        class="cursor-pointer"
        ><ProductCard
        :category="prod.category"
        :title="prod.title"
        :image="prod.image"
        :price="prod.price"
      />
      </router-link>
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