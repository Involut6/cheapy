<script setup>
import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/product";
import { useRouter, useRoute } from "vue-router";
import ProductCard from "../components/ProductCard.vue";

const router = useRouter();
const route = useRoute();
const back = () => {
  router.go(-1);
  console.log('Yes')
};

const { cart } = storeToRefs(useProductStore());
</script>

<template>
  <div class="md:p-16 p-6 w-full bg-[#F3F2EC] space-y-8">
    <div class="flex space-x-4">
      <p @click="back">Back</p>
    </div>
    <div class="text-center px-16 py-4 shadow-md bg-white">
      <p class="font-bold text-2xl text-center lg:text-4xl">Cart</p>
    </div>
    <div v-if="cart.length === 0" class="flex pt-24 justify-center text-[#F06042] w-full text-xl lg:text-4xl h-[60vh] lg:h-[70vh] font-bold">
      <p>Cart is currently empty</p>
    </div>
    <div
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
    <ProductCard v-for="prod in cart" :key="prod.id" :id="prod.id"
        :category="prod.category"
        :title="prod.title"
        :image="prod.image"
        :price="prod.price"
      />
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