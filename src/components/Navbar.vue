<script setup>
import Cart from './icons/Cart.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="w-full bg-white h-fit px-8 flex justify-between items-center border-b">
        <router-link to="/" class="py-2"><img src="../assets/images/Logo.svg" /></router-link>
        <div class="flex space-x-24 items-center h-">
            <ul class="decoration-none flex space-x-16 h-full font-bold">
            <li><router-link active-class="bg-[#0CB5BE] text-white"  class="py-[22px] px-2" to="/clothing">Clothing</router-link></li>
            <li>Accessories</li>
            <li>Electronics</li>
            </ul>
            <router-link to=""><Cart class="text-[#F06042] text-3xl"/></router-link>
        </div>
    </div>
</template>
