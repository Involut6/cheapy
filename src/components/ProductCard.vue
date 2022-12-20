<script setup>
import { useProductStore } from '../stores/product';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const { cart } = storeToRefs(useProductStore());

const props = defineProps({
    title: '',
    image: '',
    category: '',
    price: ''
})

const route = useRoute();

const removeCart = (e) => {
    cart.value.pop()
}
</script>

<template>
    <div class="bg-white space-y-2 h-fit border rounded-lg">
        <p class="p-2 font-semibold text-[#0CB5BE] w-full text-center">Category: {{props.category}}</p>
        <div class="px-4 h-[250px] w-full flex flex-col place-content-center items-center">
            <img :src="props.image" class="w-[150px]" />
        </div>
        <div class="relative py-2 px-4 space-y-4 font-semibold bg-[#99EBEF] h-[130px] w-full shadow-lg rounded-b-lg">
            <p class="text-sm">{{props.title}}</p>
                <p class="bg-white px-2 py-1 rounded-full text-black w-fit absolute bottom-2">${{(props.price + (2.2/100 * props.price)).toFixed(2)}}</p>
                <button
                v-if="route.path === '/cart'"
            class="
              w-fit
              py-[6px]
              bg-[#F06042]
              rounded-lg
              font-semibold
              text-sm px-2 
              text-white
              absolute bottom-2 right-4
            "
            @click="removeCart"
          >
            Remove from cart
          </button>
        </div>
    </div>
</template>