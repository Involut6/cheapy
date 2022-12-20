<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="w-full h-[91vh] relative">
        <img src="../assets/images/men.jpg" class="w-full object-cover h-full "/>
        <div class="absolute top-0 w-full h-full bg-black opacity-40"></div>
        <div class="absolute md:top-20 lg:top-40 top-12 xl:w-[70%] w-full md:w-[80%] space-y-4 xl:p-32 md:p-16 p-8">
            <p class="xl:text-3xl text-xl font-bold text-[#fbb13a]">STAY STYLISH WITH OUR LATEST CLOTHING COLLECTION</p>
            <p class="font-medium text-sm md:text-base text-white h-[100px] overflow-hidden">We offer a wide selection of stylish and trendy clothing for men and women. Our high-quality pieces are perfect for any occasion, from casual outings to formal events. With our affordable prices and frequent sales, you can easily find something to suit your personal style. Shop now and discover our collection of dresses, tops, bottoms, outerwear, and more. Plus, enjoy free shipping on orders over $50 and easy returns for your convenience. Shop now and elevate your wardrobe with our fashionable clothing!</p>
            <p><router-link to="/clothing" class="decoration-none cursor-pointer mt-8 px-4 py-2 rounded-lg bg-[#FBB13A] font-bold">VIEW CLOTHINGS</router-link></p>
        </div>
    </div>
</template>