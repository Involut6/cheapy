<script setup>
import { ref } from 'vue';
import Cart from './icons/Cart.vue';
import { RouterLink } from 'vue-router';
import Menu from '../components/icons/Menu.vue';

const dropDown = ref(false)

const toggleMenu = () => {
    dropDown.value = !dropDown.value
    console.log(dropDown.value)
}
</script>

<template>
    <div class="w-full bg-white h-fit md:px-8 px-4 lg:px-16 flex justify-between items-center border-b">
        <router-link to="/" class="py-2"><img src="../assets/images/Logo.svg" /></router-link>
        <div class="flex space-x-24 items-center">
            <ul class="decoration-none w-full bg-white md:drop-shadow-none md:static absolute h-fit drop-shadow-md md:w-auto z-10 top-[63px] duration-300 ease-in md:p-0 md:flex md:space-x-8 lg:space-x-16 h-full font-bold" :class="dropDown === true ? 'left-0' : 'left-[-100%]'">
            <router-link active-class="bg-[#0CB5BE] md:text-white" to="/clothing"><li class="md:py-[22px] md:px-2 px-4 cursor-pointer py-2">Clothing</li></router-link>
            <router-link active-class="bg-[#0CB5BE] md:text-white" to="/accessories"><li class="md:py-[22px] md:px-2 px-4 cursor-pointer py-2">Accessories</li></router-link>
            <router-link active-class="bg-[#0CB5BE] md:text-white" to="/electronics"><li class="md:py-[22px] md:px-2 px-4 cursor-pointer py-2">Electronics</li></router-link>
            </ul>
            <router-link to="/cart"><Cart class="text-[#F06042] text-3xl"/></router-link>
            <Menu class="text-2xl md:hidden" @click="toggleMenu" />
        </div>
    </div>
</template>
