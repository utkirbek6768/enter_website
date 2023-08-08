<template>
  <div class="determination">
    <div
      class="determination-control size-control grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1"
    >
      <div class="determination-form-block">
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          class="determination__title section__title"
        >
          Разберёмся вместе, какой курс подойдет именно вам
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="700"
          class="determination__text"
        >
          Не знаете, какой курс выбрать? Не проблема! Наши эксперты бесплатно
          помогут определиться и ответят на все ваши вопросы. Обучение
          начинается с правильного выбора курса - доверьтесь нам!
        </div>
        <form @submit.prevent class="determination-form grid gap-4">
          <input
            type="text"
            class="determination__input font-normal leading-8 text-[#383838] rounded-[10px] bg-[#f5f5f5] h-[60px] text-[16px] pl-[16px] w-[100%] col-span-12"
            placeholder="Имя"
          />
          <input
            data-aos="fade-left"
            data-aos-duration="700"
            type="email"
            class="determination__input font-normal leading-8 text-[#383838] rounded-[10px] bg-[#f5f5f5] h-[60px] text-[16px] pl-[16px] w-[100%] lg:col-span-7 md:col-span-12 col-span-12"
            placeholder="Электронная почта"
          />
          <input
            data-aos="fade-left"
            data-aos-duration="900"
            type="text"
            class="determination__input font-normal leading-8 text-[#383838] rounded-[10px] bg-[#f5f5f5] h-[60px] text-[16px] pl-[16px] w-[100%] lg:col-span-5 md:col-span-12 col-span-12"
            placeholder="Номер телефона"
          />
          <div
            data-aos="fade-left"
            data-aos-duration="1100"
            class="determination__label col-span-12 sm:col-span-11 self-center"
          >
            Нажимая на кнопку, я соглашаюсь на
            <NuxtLink>
              <span class="determination__span"> обработку персональных </span>
            </NuxtLink>
            данных и
            <NuxtLink
              ><span class="determination__span"
                >с правилами пользования Платформой</span
              ></NuxtLink
            >
          </div>
          <button
            data-aos="fade-left"
            data-aos-duration="1300"
            class="determination-btn bg-[#383838]"
          >
            submit
          </button>
        </form>
      </div>
      <div
        class="determination-img-block hover:scale-[1.1] transition"
        style="
          background: url(/next-enter.png);
          background-size: cover;
          background-repeat: no-repeat;
        "
      >
        <NuxtLink to="/"><img src="/next-enter.png" /></NuxtLink>
      </div>
    </div>
  </div>
</template>
<script scoped>
export default {};
</script>
<style>
.determination {
  margin-bottom: 90px;
}

.determination__title {
  margin-bottom: 30px;
}

.determination__text {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: #9b9b9b;
  margin-bottom: 60px;
}

.determination__input {
  font-family: "Manrope";
}

.determination-img-block {
  max-width: 529px;
  max-height: 529px;
  margin: auto;
}

.determination-img-block img {
  width: 100%;
  height: 100%;
}

.determination-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px 80px;
  height: 60px;
  border-radius: 10px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
  margin-left: auto !important;
}

.determination__label {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #383838;
}

.determination__span {
  color: #17a2d6;
}
@media screen and (max-width: 850px) {
  .determination-img-block {
    width: 300px;
    height: 300px;
    margin: auto;
  }
}
@media screen and (max-width: 530px) {
  .determination-img-block {
    width: 300px;
    height: 300px;
    margin: auto;
  }
  .determination__input {
    max-width: 400px;
  }
  .determination-btn {
    width: 80px;
  }
}
@media screen and (max-width: 350px) {
  .determination__title {
    max-width: 310px !important;
    font-size: 20px !important;
    margin-bottom: 30px;
  }
  .determination-img-block {
    width: 300px;
    height: 300px;
    margin: auto;
  }
  .determination__input {
    max-width: 300px;
  }
  .determination-btn {
    width: 80px;
  }
  .determination__text {
    font-size: 14px !important;
    width: 90%;
  }
}
</style>
