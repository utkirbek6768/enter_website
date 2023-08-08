<template>
  <div class="slider-bg bg-[#F5F6FA] mb-[80px]">
    <div class="slider-control size-control relative flex">
      <Swiper
        class="gap-8 sm:gap-8"
        :modules="[SwiperAutoplay, EffectFade]"
        effect="fade"
        :breakpoints="{
          0: { slidesPerView: 1 },
          1420: { slidesPerView: 1 },
        }"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :loop="true"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="slide in slides">
          <div class="sliderCard m-auto flex bg-[#F5F6FA]">
            <div class="sliderCard-text-control pt-[80px] w-auto">
              <div class="sliderCard__title text-[46px] mb-[40px]">
                {{ slide.title }} {{ slide.id }}
              </div>
              <div class="sliderCard__text text-[18px] max-w-[672px] mb-[60px]">
                {{ slide.text }}
              </div>
              <div class="sliderLink-control mb-[150px]">
                <span class="relative">
                  <NuxtLink :href="slide.cardLink1"
                    ><span
                      class="sliderCard-card-link py-[15px] px-[40px] hover:bg-white hover:text-black bg-red-500 text-white mr-[20px]"
                      >Читать историю</span
                    ></NuxtLink
                  >
                </span>
                <span class="relative">
                  <NuxtLink :href="slide.cardLink2"
                    ><span
                      class="sliderCard-card-link py-[15px] px-[40px] bg-white text-black hover:bg-red-500 hover:text-white"
                      >Читать историю</span
                    ></NuxtLink
                  >
                </span>
              </div>
            </div>
            <div class="avatar-control w-[672px] object-cover bg-[#f4f4f4]">
              <div
                class="sliderCard-avatar w-[100%] object-cover flex items-end h-[100%]"
              >
                <img
                  :src="slide.img"
                  style="height: 100%"
                  class="w-[100%] object-cover mt-auto"
                />
              </div>
            </div>
          </div>
        </swiper-slide>
      </Swiper>
      <div
        class="PrevNext-control flex items-end justify-center gap-4 pb-[60px] pl-[48px] w-[500px]"
        @click="handleSlidePrev"
      >
        <span
          class="flex items-center justify-center bg-[#FFFFFF] hover:bg-[#f4f4f4] w-[40px] h-[40px] rounded-[100%]"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 1L1 7L7 13" stroke="#383838" />
          </svg>
        </span>
        <span
          class="flex items-center justify-center bg-[#FFFFFF] hover:bg-[#f4f4f4] w-[40px] h-[40px] rounded-[100%]"
          @click="handleSlideNext"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L7 7L1 13" stroke="#383838" />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-fade";
import { ref } from "vue";

const slides = ref([
  {
    id: 1,
    cardLink1: "/",
    cardLink2: "/",
    title: "Станьте профессионалом в программировании",
    bg: "#e4edfa",
    text: " Предоставляем курсы по программированию на различных языках.Получите навыки от экспертов и станьте профессионалом в своей области.",
    img: "/girlAndLaptop.png",
  },
  {
    id: 2,
    cardLink1: "/",
    cardLink2: "/",
    title: "Станьте профессионалом в программировании",
    bg: "#EAE9FB",
    text: "Которые хотят расширить свой кругозор и приобрести новые знания в выбранных областях.",
    img: "https://msminfotech.com/wp-content/uploads/2021/11/2-1.png",
  },
  {
    id: 3,
    cardLink1: "/",
    cardLink2: "/",
    title: "Станьте профессионалом в программировании",
    bg: "#E5FBF1",
    text: " Предоставляем курсы по программированию на различных языках.Получите навыки от экспертов и станьте профессионалом в своей области.",
    img: "/girlAndLaptop1.png",
  },
  {
    id: 4,
    cardLink1: "/",
    cardLink2: "/",
    title: "Станьте профессионалом в программировании  ",
    bg: "#FBE5E5",
    text: "Которые хотят расширить свой кругозор и приобрести новые знания в выбранных областях..",
    img: "/webDevelopmen.png",
  },
]);

const swiperRef = ref(null);

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

const handleSlidePrev = () => {
  swiperRef.value.slidePrev();
};

const handleSlideNext = () => {
  swiperRef.value.slideNext();
};
</script>

<style>
.avatar-control {
  width: 672px;
}
</style>
