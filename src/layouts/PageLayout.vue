<script setup>
import Navbar from '../components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <body class="max-w-[2000px] mx-auto">
        <Navbar />
        <RouterView />
    </body>
</template>