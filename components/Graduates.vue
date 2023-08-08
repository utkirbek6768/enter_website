<template>
  <div class="graduates">
    <div class="graduates-control size-control">
      <div class="graduates-titleControl flex items-center justify-between">
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          class="graduates__title section__title"
        >
          Отзывы наших выпускников
        </div>
        <div
          class="PrevNext-control flex items-center justify-between gap-4 max-w-[100px]"
          @click="handleSlidePrev"
        >
          <span class="flex items-center justify-center">
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
            class="flex items-center justify-center"
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
      <div class="graduates__text">
        Мы гордимся нашими студентами, которые проходят обучение у нас и
        достигают своих целей. Они делятся своими успехами и впечатлениями,
        помогая другим принять решение о выборе курсов.
      </div>
      <div class="graduates-card-control">
        <Swiper
          class="gap-8 sm:gap-8"
          :modules="[SwiperAutoplay, SwiperEffectCreative]"
          :breakpoints="{
            0: { slidesPerView: 1 },
            1420: { slidesPerView: 1.65 },
          }"
          :autoplay="{
            delay: 80000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :loop="true"
          @swiper="onSwiper"
        >
          <swiper-slide v-for="slide in 5">
            <UiGraduatescard />
          </swiper-slide>
        </Swiper>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { ref } from "vue";

export default {
  setup() {
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
    return { onSwiper, handleSlidePrev, handleSlideNext };
  },
};
</script>
<style scoped>
@media screen and (max-width: 700px) {
  .graduates {
    margin-bottom: 143px !important;
  }
  .graduates__text {
    font-size: 14px !important;
  }
}
.graduates {
  margin-bottom: 243px;
}

.graduates-titleControl {
  margin-bottom: 30px;
}

.graduates-card-control {
  position: relative;
  display: flex;
}

.PrevNext-control span {
  width: 40px;
  height: 40px;
  background: #f5f5f5;
  border-radius: 100%;
}
.PrevNext-control span:hover {
  background: #7a73ff;
  transition: all 0.5s ease;
  color: white;
}
.PrevNext-control span:hover svg {
  color: white;
}

.graduates__text {
  max-width: 768px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: #9b9b9b;
  margin-bottom: 60px;
}
.graduates-card-control::before {
  content: "";
  height: 100%;
  z-index: 2;
  position: absolute;
  right: -5%;
  box-shadow: -100px 1px 100px 150px white;
}
@media screen and (max-width: 1420px) {
  .graduates-card-control::before {
    content: none !important;
  }
}
</style>
