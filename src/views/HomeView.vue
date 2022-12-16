<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import ElectronicsSlideItem from "../components/ElectronicsSlideItem.vue";
import ClothingSlideItem from "../components/ClothingSlideItem.vue";
import AccessoriesSlideItem from '../components/AccessoriesSlideItem.vue';
</script>

<template>
  <section class="w-full h-full content-center">
    <swiper
      :spaceBetween="0"
      :centeredSlides="true"
      :loop="true"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: true,
      }"
      :speed="1500"
      :pagination="{
        clickable: true,
        dynamicBullets: true,
      }"
      :modules="[Pagination, Autoplay]"
      class="mySwiper"
    >
      <swiper-slide><ClothingSlideItem /></swiper-slide
      ><swiper-slide><ElectronicsSlideItem /></swiper-slide
      ><swiper-slide><AccessoriesSlideItem /></swiper-slide>
    </swiper>
  </section>
</template>