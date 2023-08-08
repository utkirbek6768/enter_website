<template>
  <div class="directions">
    <div
      data-aos-duration="500"
      data-aos="fade-in-down"
      class="directions__title section__title size-control m-bottom"
    >
      Наше направление
    </div>
    <div
      class="directions-control size-control grid grid-cols-12 gap-8 m-bottom"
    >
      <div
        data-aos-duration="400"
        data-aos="zoom-in-down"
        class="directions-card card--cyan col-span-12 lg:col-span-6 xl:col-span-4"
      >
        <img src="/literacy-bg.png" class="literacy-bg" />
        <NuxtLink>
          <div class="directions-avatar">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.6878 12.5626L2 1.99994L12.5626 33.6878L19.1642 27.086L31.2531 39.175L39.1751 31.2531L27.0862 19.1642L33.6878 12.5626Z"
                stroke="#383838"
                stroke-width="4"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="directions-card__title">IT-грамотность</div>
          <div class="directions-card__text">
            Курсы, позволяющие улучшить знания и навыки в работе с компьютером.
          </div>
        </NuxtLink>
        <div class="directions-link-control flex flex-wrap">
          <span class="directions-card__link">
            <NuxtLink>Основы компьютерной грамотности</NuxtLink>
          </span>
          <span class="directions-card__link">
            <NuxtLink>Работа в операционной системе</NuxtLink>
          </span>
        </div>
      </div>
      <div
        data-aos-duration="600"
        data-aos="zoom-in-down"
        class="directions-card card--gray col-span-12 lg:col-span-6 xl:col-span-8"
      >
        <img src="/programming-bg.png" class="programming-bg" />
        <NuxtLink>
          <div class="directions-avatar">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_13_80)">
                <rect width="60" height="60" fill="white" />
                <path
                  d="M20.7812 57.6562C15.6897 57.6562 11.5624 53.5288 11.5624 48.4375V45.9674C11.5624 39.3803 8.0483 33.2935 2.34375 30.0001C8.0483 26.7067 11.5624 20.6198 11.5624 14.0327V11.5627C11.5624 6.47137 15.6897 2.34392 20.7812 2.34392"
                  stroke="#383838"
                  stroke-width="4"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M39.2187 2.34392C44.31 2.34392 48.4373 6.47137 48.4373 11.5627V14.0327C48.4373 20.6198 51.9515 26.7067 57.6561 30.0001C51.9515 33.2935 48.4373 39.3803 48.4373 45.9674V48.4375C48.4373 53.5288 44.31 57.6562 39.2187 57.6562"
                  stroke="#383838"
                  stroke-width="4"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13_80">
                  <rect width="60" height="60" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="directions-card__title">Программирование</div>
          <div class="directions-card__text">
            Развивайте навыки программирования вместе с нами!
          </div>
        </NuxtLink>
        <div class="directions-link-control flex flex-wrap mt-auto">
          <span class="directions-card__link">
            <NuxtLink>Бэкенд-разработка</NuxtLink>
          </span>
          <span class="directions-card__link">
            <NuxtLink>Веб-разработка</NuxtLink>
          </span>
          <span class="directions-card__link">
            <NuxtLink>Фронтэнд-разработка</NuxtLink>
          </span>
          <span class="directions-card__link">
            <NuxtLink>Мобильная разработка</NuxtLink>
          </span>
          <span class="directions-card__link">
            <NuxtLink>Анализ данных</NuxtLink>
          </span>
          <span class="directions-card__link">
            <NuxtLink>Управление разработкой</NuxtLink>
          </span>
        </div>
      </div>
      <div
        data-aos-duration="800"
        data-aos="zoom-in-down"
        class="directions-card card--pink col-span-12 lg:col-span-6 xl:col-span-6"
      >
        <img src="/design-bg.png" class="design-bg" />
        <NuxtLink>
          <div class="directions-avatar">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.6016 62H26.3983V54.5311H37.6016V62Z"
                stroke="#383838"
                stroke-width="4"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.3983 54.531L18.9294 43.2032L32 16.9376L45.0705 43.2032L37.6016 54.531"
                stroke="#383838"
                stroke-width="4"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.73444 9.46875C3.67203 9.46875 2 7.79684 2 5.73431C2 3.6719 3.67203 1.99987 5.73444 1.99987C7.79685 1.99987 9.46888 3.67178 9.46888 5.73431C9.46888 7.79672 7.79685 9.46875 5.73444 9.46875Z"
                stroke="#383838"
                stroke-width="4"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M35.7344 9.46875H28.2656V1.99987H35.7344V9.46875Z"
                stroke="#383838"
                stroke-width="4"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M58.2656 9.46875C56.2032 9.46875 54.5311 7.79684 54.5311 5.73431C54.5311 3.6719 56.2032 1.99987 58.2656 1.99987C60.328 1.99987 62 3.67178 62 5.73431C62 7.79672 60.328 9.46875 58.2656 9.46875Z"
                stroke="#383838"
                stroke-width="4"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M32 16.9378V43.2034"
                stroke="#383838"
                stroke-width="4"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.46887 5.73438H28.2656"
                stroke="#383838"
                stroke-width="4"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M35.7344 5.73438H54.5311"
                stroke="#383838"
                stroke-width="4"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.7345 31.8755C5.7345 18.7061 15.5973 7.81126 28.2656 5.99918"
                stroke="#383838"
                stroke-width="4"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M35.7344 5.99918C48.4028 7.81126 58.2656 18.7061 58.2656 31.8755"
                stroke="#383838"
                stroke-width="4"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="directions-card__title">Дизайн</div>
          <div class="directions-card__text">
            Раскройте свой творческий потенциал с нашими курсами дизайна!
          </div>
        </NuxtLink>
        <div class="directions-link-control flex flex-wrap mt-auto">
          <span class="directions-card__link">
            <NuxtLink>Бэкенд-разработка</NuxtLink>
          </span>
          <span class="directions-card__link">
            <NuxtLink>Веб-разработка</NuxtLink>
          </span>
          <span class="directions-card__link">
            <NuxtLink>Фронтэнд-разработка</NuxtLink>
          </span>
          <span class="directions-card__link">
            <NuxtLink>Мобильная разработка</NuxtLink>
          </span>
          <span class="directions-card__link">
            <NuxtLink>Анализ данных</NuxtLink>
          </span>
          <span class="directions-card__link">
            <NuxtLink>Управление разработкой</NuxtLink>
          </span>
        </div>
      </div>
      <div
        data-aos-duration="1000"
        data-aos="zoom-in-down"
        class="directions-card card--light col-span-12 lg:col-span-6 xl:col-span-6"
      >
        <img src="/marketing-bg.png" class="marketing-bg" />
        <NuxtLink>
          <div class="directions-avatar">
            <svg
              width="64"
              height="53"
              viewBox="0 0 64 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M46.5571 45.4633C46.8878 46.258 47.6429 46.8132 48.5038 46.8132H52.5311C53.6357 46.8132 54.5311 45.9178 54.5311 44.8132V3.99995C54.5311 2.89539 53.6357 1.99995 52.5311 1.99995H48.5038C47.6429 1.99995 46.8878 2.55515 46.5571 3.34993C43.9587 9.59357 38.3108 14.1817 31.6233 15.5192L24.5977 16.9002C24.4706 16.9251 24.3414 16.9377 24.2119 16.9377H4C2.89543 16.9377 2 17.8331 2 18.9377V29.8755C2 30.98 2.89543 31.8755 4 31.8755H24.2119C24.3414 31.8755 24.4706 31.888 24.5977 31.913L31.6233 33.2939C38.3108 34.6314 43.9587 39.2196 46.5571 45.4633Z"
                stroke="#383838"
                stroke-width="4"
                stroke-miterlimit="10"
              />
              <path
                d="M24.4066 31.8752V16.9375"
                stroke="#383838"
                stroke-width="4"
                stroke-miterlimit="10"
              />
              <path
                d="M54.5311 16.9375L58.6833 19.0136C60.716 20.0299 62 22.1337 62 24.4064V24.4064C62 26.679 60.716 28.7828 58.6833 29.7992L54.5311 31.8752"
                stroke="#383838"
                stroke-width="4"
                stroke-miterlimit="10"
              />
              <path
                d="M16.9378 31.8757V46.8134C16.9378 48.8759 15.2658 50.5479 13.2033 50.5479V50.5479C11.1408 50.5479 9.46887 48.8759 9.46887 46.8134V31.8757"
                stroke="#383838"
                stroke-width="4"
                stroke-miterlimit="10"
              />
            </svg>
          </div>
          <div class="directions-card__title">Маркетинг</div>
          <div class="directions-card__text">
            освоите эффективные стратегии маркетинга с нашими профессиональными
            курсами!
          </div>
        </NuxtLink>
        <div class="directions-link-control flex flex-wrap mt-auto">
          <span class="directions-card__link">
            <NuxtLink>Бэкенд-разработка</NuxtLink>
          </span>
          <span class="directions-card__link">
            <NuxtLink>Веб-разработка</NuxtLink>
          </span>
          <span class="directions-card__link">
            <NuxtLink>Фронтэнд-разработка</NuxtLink>
          </span>
          <span class="directions-card__link">
            <NuxtLink>Мобильная разработка</NuxtLink>
          </span>
          <span class="directions-card__link">
            <NuxtLink>Анализ данных</NuxtLink>
          </span>
          <span class="directions-card__link">
            <NuxtLink>Управление разработкой</NuxtLink>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
@media screen and (max-width: 576px) {
  .directions-card {
    border-radius: 40px !important;
    padding: 5% !important;
  }
  .directions-avatar {
    margin-bottom: 30px !important;
  }
  .directions-card__title {
    font-size: 25px !important;
    margin-bottom: 5%;
  }
  .directions-card__text {
    font-weight: 400;
    font-size: 14px !important;
    line-height: 140%;
    color: #9b9b9b;
    margin-bottom: 25px;
  }
  .directions-card__link {
    padding: 9px 16px;
    height: auto !important;
  }
}
@media screen and (max-width: 476px) {
  .directions-card {
    border-radius: 20px !important;
    padding: 5% !important;
    border: 1px solid red;
  }
  .directions-avatar {
    margin-bottom: 30px !important;
  }
  .directions-card__title {
    font-size: 20px !important;
    margin-bottom: 5%;
    z-index: 980 !important;
  }
  .directions-card__text {
    font-weight: 400;
    font-size: 14px !important;
    line-height: 140%;
    color: #9b9b9b;
    margin-bottom: 25px;
  }
  .directions-card__link {
    font-size: 14px !important;
    padding: 9px 16px;
    height: auto !important;
  }
  .directions-card img {
    display: none;
  }
}
@media screen and (max-width: 377px) {
  .directions-card {
    max-width: 100% !important;
    margin: 0px !important;
  }
}
@media screen and (max-width: 330px) {
  .directions-card {
    margin: 0 !important;
  }
}

.card--cyan {
  background: #e5fbf1;
}

.card--gray {
  background: #e6edfa;
}

.card--pink {
  background: #fbe5e5;
}

.card--light {
  background: #eae9fb;
}

.directions-card {
  border-radius: 40px;
  position: relative;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
}

.directions-card img {
  position: absolute;
  right: 0%;
  bottom: 0px;
  z-index: 2;
}

.directions-card:nth-child(2) img {
  right: 6%;
}

.directions-avatar {
  width: 120px;
  height: 120px;
  background: linear-gradient(
    308.91deg,
    #ffffff 16.12%,
    rgba(255, 255, 255, 0) 95.37%
  );
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
}

.directions-card__title {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 140%;
  color: #383838;
  margin-bottom: 10px;
  z-index: 99;
}

.directions-card__text {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: #9b9b9b;
  margin-bottom: 35px;
  z-index: 99;
}

.directions-card__link {
  padding: 9px 16px;
  height: 40px;
  background: #ffffff;
  border-radius: 20px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #383838;
  margin-bottom: 10px;
  margin-right: 10px;
  z-index: 9;
}
</style>
