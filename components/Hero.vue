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
        id: 1,
        index: 1,
        author: "Toirov Utkirbek",
        description:
          "Бросил таксистскую работу и стал программистом благодаря нашему курсу обучения. Начните карьеру в IT-индустрии с нуля с нашими преподавателями и материалами.",
        img: "/teacher-avatar.png",
      },
      {
        id: 2,
        index: 2,
        author: "Toirov Utkirbek",
        description:
          "Бросил таксистскую работу и стал программистом благодаря нашему курсу обучения. Начните карьеру в IT-индустрии с нуля с нашими преподавателями и материалами.",
        img: "/teacher-avatar.png",
      },
      {
        id: 3,
        index: 3,
        author: "Toirov Utkirbek",
        description:
          "Бросил таксистскую работу и стал программистом благодаря нашему курсу обучения. Начните карьеру в IT-индустрии с нуля с нашими преподавателями и материалами.",
        img: "/teacher-avatar.png",
      },
    ]);
    return { modules: [Pagination, Autoplay], swiperTextBase };
  },
};
</script>

<template>
  <div class="hero size-control grid grid-cols-2 m-bottom">
    <div
      data-aos="fade-right"
      data-aos-duration="500"
      class="hero-text-block pl-14"
    >
      <div class="section__title hero__title">
        Изучайте языки программирования
      </div>
      <p class="hero__text">
        Изучайте языки программирования, создавайте приложения и веб-сайты.
        Получите практические навыки.
      </p>

      <form @submit.prevent class="hero-form">
        <div class="hero-item-helper">
          <svg
            class="ml-[20px] text-[#383838]"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="7" stroke="#383838" />
            <path d="M20 20L16 16" stroke="#383838" stroke-linecap="square" />
          </svg>
          <input
            type="text"
            class="hero__input focus:outline-none text-center"
            placeholder="Курс или профессия"
          />
        </div>
        <button
          data-aos="fade-in"
          data-aos-duration="200"
          class="hero__button px-[5px]"
        >
          submits
        </button>
      </form>
    </div>
    <div data-aos="fade-left" data-aos-duration="500" class="hero-slider-blo">
      <Swiper
        :modules="modules"
        :space-between="20"
        :loop="true"
        :pagination="{ clickable: true }"
        :autoplay="{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
      >
        <SwiperSlide v-for="slide in swiperTextBase" :key="slide.id">
          <div class="trainingPrograms-card realitive">
            <div class="hero-slider-img card-img mx-auto mb-3">
              <img :src="slide.img" class="w-full" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style>
.hero {
  background: #c9e7f2;
  border-radius: 40px;
  width: auto;
  margin-bottom: 90px;
}

.hero__title {
  margin-bottom: 20px;
  margin-top: 90px;
}

.hero__text {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: #383838;
  margin-bottom: 60px;
}

.hero-form {
  padding: 30px;
  background: #ffffff;
  border-radius: 20px;
  display: flex;
}

.hero__input {
  width: 100% !important;
  height: 60px;
  background: #f5f5f5;
  border-radius: 10px;
  border: none;
  text-align: left;
  padding-left: 10px;
  color: #383838;
}
.hero-item-helper {
  background: #f5f5f5;
  border-radius: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  width: 368px;
}

.hero__button {
  width: 207px;
  height: 60px;
  background: #383838;
  border-radius: 10px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
}

.hero-slider-img {
  max-width: 575px;
  height: 100%;
  margin: auto;
  margin-top: 32px;
  z-index: 1;
}

.hero-slider-img img {
  width: 100%;
  height: 100%;
  position: relative;
  bottom: 0px;
}

.card-text-control {
  position: absolute;
  left: 20%;
  bottom: 126px;
  max-width: 100%;
  max-width: 460px;
  margin: auto;
}

.card__title {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #383838;
  margin-bottom: 11px;
}

.card__text {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #383838;
}
.swiper-pagination {
  top: 80% !important;
}
.swiper-pagination-bullet {
  width: 107px !important;
  height: 6px !important;
  background: #383838 !important;
  opacity: 0.1 !important;
  border-radius: 10px !important;
}
.swiper-pagination-bullet-active {
  background: #ffffff !important;
  border-radius: 10px !important;
  opacity: 1 !important;
}
@media screen and (max-width: 1400px) {
  .hero-form {
    padding: 10px;
  }
}

@media screen and (max-width: 1150px) {
  .hero {
    align-items: flex-end;
    overflow: hidden;
  }
  .hero-text-block {
    padding: 8%;
  }
  .trainingPrograms-card {
    height: 100%;
  }
  .hero__title {
    font-size: 40px;
    margin-top: 40px;
  }
  .card-text-control {
    margin: auto;
    left: 10%;
    bottom: 20%;
  }

  .hero__button {
    width: 100px;
  }
}
@media screen and (max-width: 950px) {
  .hero {
    display: block;
    flex-direction: column;
    padding: 0px 5%;
  }
  .hero-text-block {
    margin: auto;
    padding: 2% 2% 0% 2%;
  }
  .hero__title {
    font-size: 30px;
  }
  .hero-form {
    padding: 2%;
    border-radius: 15px;
  }
  .hero-item-helper {
    width: 100%;
  }
  .hero__button {
    width: 200px;
  }
}
@media screen and (max-width: 576px) {
  .hero-form {
    padding: 2%;
    border-radius: 15px;
  }
  .hero__text {
    margin-bottom: 5%;
  }
  .hero-form {
    padding: 2%;
    border-radius: 15px;
    height: 65px;
  }
  .hero-item-helper {
    width: 100%;
  }
  .hero__input {
    height: 100%;
  }
  .hero__button {
    height: 100%;
    width: 150px;
  }
}
@media screen and (max-width: 500px) {
  .hero {
    border-radius: 15px;
  }
  .hero-item-helper svg {
    display: none;
  }
}
@media screen and (max-width: 400px) {
  .hero__title {
    font-size: 20px !important;
  }
  .hero__text {
    font-size: 16px !important;
  }
  .hero__input {
    font-size: 14px;
  }
}
</style>
