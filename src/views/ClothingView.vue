<script setup>
import ProductCard from '../components/ProductCard.vue';
import { ref, onBeforeMount } from 'vue';
import { useProductStore } from '../stores/product.js';
import { storeToRefs } from 'pinia';

const { getProducts } = useProductStore();
const { men, women, isLoading } = storeToRefs(useProductStore())

onBeforeMount(() => {
    getProducts()
});

const section = ref('men');

const toggleWomen = () => {
    section.value = 'women'
}
const toggleMen = () => {
    section.value = 'men'
}
</script>

<template>
    <div class="p-16 w-full bg-white space-y-8">
        <p class="font-bold text-4xl">Clothing</p>
        <div class="flex space-x-16 justify-center px-16">
            <p 
                class="text-xl font-semibold px-3 py-4 rounded-lg cursor-pointer" 
                :class="section === 'men' ? 'bg-[#0CB5BE] text-white' : 'gb-white'"
                @click="toggleMen"
            >
                Men's Clothing
            </p>
            <p 
                class="text-xl font-semibold px-3 py-4 rounded-lg cursor-pointer" 
                :class="section === 'women' ? 'bg-[#0CB5BE] text-white' : 'gb-white'"
                @click="toggleWomen"
            >
                Women's Clothing
            </p>
        </div>
        <div v-if="isLoading" class="flex justify-between p-16">
            <div v-for="index in 4" :key="index"><span class="loader"></span></div>
        </div>
        <div v-else-if="section === 'men'" class="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 xl:px-16">
            <ProductCard v-for="prod in men" :key="prod.id" :category="prod.category" :title="prod.title" :image="prod.image" :price="prod.price" />
        </div>
        <div v-else-if="section === 'women'" class="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 xl:px-16">
            <ProductCard v-for="prod in women" :key="prod.id" :category="prod.category" :title="prod.title" :image="prod.image" :price="prod.price" />
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
  background: #FFF;
  box-sizing: border-box;
}
.loader::after {
  content: '';
  width: calc(100%);
  height: calc(100%);
  top: 15px;
  left: 15px;
  position: absolute;
  background-image: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5) 50%, transparent 100%),
   linear-gradient(#DDD 100px, transparent 0),
   linear-gradient(#DDD 16px, transparent 0),
   linear-gradient(#DDD 50px, transparent 0);
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