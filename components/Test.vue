<template>
  <swiper
    class="mySwiper relative"
    :modules="modules"
    :space-between="20"
    :loop="true"
    :pagination="{ clickable: true }"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
  >
    <swiper-slide v-for="text in swiperTextBase" :key="text.description">
      <div>
        <h1 class="text-red-200">{{ text.author }}</h1>
        <hr />
        <p class="text-red-200">{{ text.description }}</p>
        <hr />
        <p class="text-red-200">{{ text.img }}</p>
        <hr />
        <img
          :src="text.img"
          class="card-img absolute left-0 top-0 w-[100%] h-[100%]"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { ref } from "vue";
export default {
  setup() {
    const swiperTextBase = ref([
      {
        author: "Toirov Utkirbek",
        description:
          "Бросил таксистскую работу и стал программистом благодаря нашему курсу обучения. Начните карьеру в IT-индустрии с нуля с нашими преподавателями и материалами.",
        img: "/_nuxt/public/teacher-avatar.png",
      },
      {
        author: "Toirov Utkirbek",
        description:
          "Бросил таксистскую работу и стал программистом благодаря нашему курсу обучения. Начните карьеру в IT-индустрии с нуля с нашими преподавателями и материалами.",
        img: "/_nuxt/public/logo.png",
      },
      {
        author: "Toirov Utkirbek",
        description:
          "Бросил таксистскую работу и стал программистом благодаря нашему курсу обучения. Начните карьеру в IT-индустрии с нуля с нашими преподавателями и материалами.",
        img: "/_nuxt/public/teacher-avatar.png",
      },
    ]);
    return { modules: [Pagination, Autoplay], swiperTextBase };
  },
};
</script>

<style scoped>
.mySwiper {
  height: 200px;
  width: 400px;
  margin: auto;
}
.card-img {
  z-index: -1;
}
</style>
