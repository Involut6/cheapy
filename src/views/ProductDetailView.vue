<script setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/product";
import { useRouter } from "vue-router";
import Modal from "../components/Modal.vue";
import { useModal } from "../useModal.ts";

const { modalIsOpen, openModal, closeModal } = useModal();

const formIsOpen = ref(false); 

const open = () => {
  document.body.classList.add("overflow-hidden");
  formIsOpen.value = true;
  openModal();
};

const close = async () => {
  document.body.classList.remove("overflow-hidden");
  formIsOpen.value = false;
  closeModal();
};

const router = useRouter();
const back = () => {
  router.go(-1);
};
const { isLoading, prodId, product, cart, error } = storeToRefs(useProductStore());
const { getProduct } = useProductStore();

const props = defineProps({
  id: Number,
});

onMounted(() => {
  prodId.value = props.id;
  getProduct()
});

const modalText = ref('')

const addToCart = () => {
  if (cart.value.includes(product.value)) {
    open()
    modalText.value = 'Product already exists inside the cart'
  } else if (error.value) {
    modalText.value = 'Sorry, an error occurs from our side while adding your product to the cart, we are currently working on it, Kindly try again.'
  }
  else {
    cart.value.push(product.value)
    open()
    modalText.value = 'Product added to cart'
  }

}

</script>

<template>
  <div class="md:p-16 p-8 w-full xl:px-48 bg-white bg-[#F3F2EC] space-y-8">
    <Modal v-if="formIsOpen && modalIsOpen" @closeModal="close">
      <p>{{ modalText }}</p>
      <button class="bg-[#F06042] text-white px-2 py-1 decoration-none rounded" @click="close">Ok</button>
    </Modal>
    <div class="flex space-x-4">
      <p @click="back">Back</p>
    </div>
    <div class="text-center lg:px-16 lg:py-4 px-6 py-2 shadow-md bg-white">
      <p class="font-bold md:text-[28px]">{{ product.title }}</p>
    </div>
    <div v-if="isLoading" class="space-y-4 px-2">
            <span class="loader"></span>
    </div>
    <div 
        v-else
      class="
        w-full
        bg-white
        rounded-xl
        xl:p-20
        lg:p-12
        p-6
        flex-col flex
        items-center
        md:space-x-4 md:flex-row
        lg:space-x-16
        xl:space-x-20
      "
    >
      <img :src="product.image" class="xl:w-[400px] w-[250px]" />
      <div class="bg-white w-full space-y-4 mt-4 md:mt-0">
        <p class="lg:text-xl font-semibold border-b p-2 text-[#F06042]">
          Product Details
        </p>
        <div class="space-y-4 px-2">
          <p class="lg:text-base text-xs font-semibold">
            <strong>Title: </strong>{{ product.title }}
          </p>
          <p class="lg:text-base text-xs font-semibold">
            <strong>Category:</strong> {{ product.category }}
          </p>
          <p class="lg:text-base text-xs font-semibold">
            <strong>Description:</strong> {{ product.description }}
          </p>
          <p class="text-2xl font-bold text-[#F06042]">
            ${{ (product.price + (2.2 / 100) * product.price).toFixed(2) }}
          </p>
          <button
            class="
              w-full
              py-2
              bg-[#F06042]
              rounded-lg
              text-lg
              font-semibold
              text-white
            "
            @click="addToCart"
          >
          Add to cart
          </button>
        </div>
      </div>
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