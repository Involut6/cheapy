<script setup>
const props = defineProps({
    title: '',
    image: '',
    category: '',
    price: ''
})
</script>

<template>
    <div class="bg-white space-y-2 h-fit border rounded-lg">
        <p class="p-2 font-semibold text-[#0CB5BE] w-full text-center">{{props.category}}</p>
        <div class="px-4 h-[250px] w-[250px] flex flex-col place-content-center items-center">
            <img :src="props.image" class="w-[150px]" />
        </div>
        <div class="relative py-2 px-4 space-y-4 font-semibold bg-[#99EBEF] h-[130px] w-full shadow-lg rounded-b-lg">
            <p class="text-sm">{{props.title}}</p>
            <p class="bg-white px-2 py-1 rounded-full text-black w-fit absolute bottom-[8px]">${{props.price}}</p>
        </div>
    </div>
</template>