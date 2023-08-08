<template>
  <div class="fotter">
    <div class="fotter-control size-control">
      <div class="sitemap grid sm:grid-cols-12 grid-cols-1">
        <div
          class="list-control col-span-6 sm:col-span-6 md:col-span-4 xl:col-span-2 mb-8"
        >
          <Logo />
        </div>
        <div
          class="fotter-contact list-control col-span-6 sm:col-span-6 md:col-span-4 xl:col-span-2 mb-8"
        >
          <div class="contact">
            <div class="contact-control flex">
              <svg
                class="mr-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="6"
                  width="16"
                  height="12"
                  rx="2"
                  stroke="#383838"
                  stroke-width="1.5"
                />
                <path
                  d="M4 9L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L20 9"
                  stroke="#383838"
                  stroke-width="1.5"
                />
              </svg>

              <div class="mail-control mb-6">
                <NuxtLink to="mailto:utkirbektoirov1@gmail.com"
                  ><div class="mail">hello@enter.uz</div></NuxtLink
                >
                <div class="mail__description">
                  Пишите нам с любыми вопросами
                </div>
              </div>
            </div>
            <div class="contact-control flex">
              <svg
                class="mr-2"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7071 11.7071L16.3552 14.3552C16.7113 14.7113 16.7113 15.2887 16.3552 15.6448C14.43 17.57 11.3821 17.7866 9.20399 16.153L7.62857 14.9714C5.88504 13.6638 4.33622 12.115 3.02857 10.3714L1.84701 8.79601C0.213407 6.61788 0.430014 3.56999 2.35523 1.64477C2.71133 1.28867 3.28867 1.28867 3.64477 1.64477L6.29289 4.29289C6.68342 4.68342 6.68342 5.31658 6.29289 5.70711L5.27175 6.72825C5.10946 6.89054 5.06923 7.13846 5.17187 7.34373C6.35853 9.71706 8.28294 11.6415 10.6563 12.8281C10.8615 12.9308 11.1095 12.8905 11.2717 12.7283L12.2929 11.7071C12.6834 11.3166 13.3166 11.3166 13.7071 11.7071Z"
                  stroke="#383838"
                  stroke-width="1.5"
                />
              </svg>

              <div class="mail-control mb-6">
                <NuxtLink to="tel:998905376768"
                  ><div class="mail">+998 90 537 67 68</div></NuxtLink
                >
                <div class="mail__description">
                  Звоните нам с любыми вопросами
                </div>
              </div>
            </div>
            <div class="messengers flex">
              <span
                ><NuxtLink to="/"
                  ><svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                      fill="#9B9B9B"
                    /></svg></NuxtLink
              ></span>
              <span>
                <NuxtLink to="/"
                  ><svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12187 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78437 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126562 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8562C0.9375 20.6484 1.34531 21.3187 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3187 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74687 23.9719 8.33906 23.9156 7.05937C23.8594 5.78437 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
                      fill="#9B9B9B"
                    />
                    <path
                      d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
                      fill="#9B9B9B"
                    />
                    <path
                      d="M19.8469 5.59238C19.8469 6.38926 19.2 7.03145 18.4078 7.03145C17.6109 7.03145 16.9688 6.38457 16.9688 5.59238C16.9688 4.79551 17.6156 4.15332 18.4078 4.15332C19.2 4.15332 19.8469 4.8002 19.8469 5.59238Z"
                      fill="#9B9B9B"
                    /></svg></NuxtLink
              ></span>
              <span
                ><NuxtLink to="/"
                  ><svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_59_45)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57348 13.2411C5.65819 13.2678 5.74596 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6857 15.9067 12.0769 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z"
                        fill="#9B9B9B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_59_45">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg> </NuxtLink
              ></span>
            </div>
          </div>
        </div>
        <div
          class="list-control col-span-6 sm:col-span-6 md:col-span-4 xl:col-span-2 mb-8"
        >
          <ul class="sitemap-list">
            <div class="sitemap__title">Все курсы</div>
            <li class="sitemap__item">
              <NuxtLink to="/"><span>IT-грамотность</span></NuxtLink>
            </li>
            <li class="sitemap__item">
              <NuxtLink to="/"><span>Программирование</span></NuxtLink>
            </li>
            <li class="sitemap__item">
              <NuxtLink to="/"><span>Дизайн</span></NuxtLink>
            </li>
            <li class="sitemap__item">
              <NuxtLink to="/"><span>Маркетинг</span></NuxtLink>
            </li>
          </ul>
        </div>
        <div
          class="list-control col-span-6 sm:col-span-6 md:col-span-4 xl:col-span-2 mb-8"
        >
          <ul class="sitemap-list">
            <div class="sitemap__title">Все курсы</div>
            <li class="sitemap__item">
              <NuxtLink to="/"><span>IT-грамотность</span></NuxtLink>
            </li>
            <li class="sitemap__item">
              <NuxtLink to="/"><span>Программирование</span></NuxtLink>
            </li>
            <li class="sitemap__item">
              <NuxtLink to="/"><span>Дизайн</span></NuxtLink>
            </li>
            <li class="sitemap__item">
              <NuxtLink to="/"><span>Маркетинг</span></NuxtLink>
            </li>
          </ul>
        </div>
        <div
          class="list-control col-span-6 sm:col-span-6 md:col-span-4 xl:col-span-2 mb-8"
        >
          <ul class="sitemap-list">
            <div class="sitemap__title">Все курсы</div>
            <li class="sitemap__item">
              <NuxtLink to="/"><span>IT-грамотность</span></NuxtLink>
            </li>
            <li class="sitemap__item">
              <NuxtLink to="/"><span>Программирование</span></NuxtLink>
            </li>
            <li class="sitemap__item">
              <NuxtLink to="/"><span>Дизайн</span></NuxtLink>
            </li>
            <li class="sitemap__item">
              <NuxtLink to="/"><span>Маркетинг</span></NuxtLink>
            </li>
          </ul>
        </div>
        <div
          class="list-control col-span-6 sm:col-span-6 md:col-span-4 xl:col-span-2 mb-8"
        >
          <ul class="sitemap-list">
            <div class="sitemap__title">Все курсы</div>
            <li class="sitemap__item">
              <NuxtLink to="/"><span>IT-грамотность</span></NuxtLink>
            </li>
            <li class="sitemap__item">
              <NuxtLink to="/"><span>Программирование</span></NuxtLink>
            </li>
            <li class="sitemap__item">
              <NuxtLink to="/"><span>Дизайн</span></NuxtLink>
            </li>
            <li class="sitemap__item">
              <NuxtLink to="/"><span>Маркетинг</span></NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="hr"></div>
      <div class="copyright grid md:grid-cols-12">
        <ul class="copyright-list flex col-span-12 md:col-span-6 mb-8">
          <li class="copyright__item mr-5">Оферта</li>
          <li class="copyright__item mr-5">Оплата</li>
          <li class="copyright__item mr-5">Политика конфиденцальности</li>
        </ul>
        <div
          class="copyright__text col-span-12 md:col-span-6 mb-8 lg:text-right text-left"
        >
          Мы используем файлы cookie, для персонализации сервисов и повышения
          удобства пользования сайтом.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.sitemap__item span {
  position: relative;
}
.sitemap__item span::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0px;
  right: 100%;
  height: 3px;
  background-color: #07bafb;
  display: block;
  opacity: 0;
  transition: 0.5s all ease;
}
.sitemap__item:hover span:after {
  right: 0;
  opacity: 1;
}
</style>
<style scoped>
@media screen and (max-width: 400px) {
  .list-control {
    width: 80% !important;
    margin: auto;
    margin-bottom: 5%;
  }
}
.fotter {
  background: #f5f5f5;
  padding-top: 64px;
  padding-bottom: 100px;
}
.messengers span {
  padding: 13px 26px 13px 0px;
  display: block;
}
.messengers span:hover svg path {
  fill: #43b8d9;
  transition: all 0.5s ease;
}
.mail {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #383838;
}
.mail__description {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #9b9b9b;
  max-width: 185px;
}
.sitemap__title {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #383838;
  margin-bottom: 20px;
}
.sitemap-list {
  margin-bottom: 30px;
}
.sitemap__item {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #9b9b9b;
  margin-bottom: 20px;
}
.hr {
  border-bottom: 2px solid #e1e1e1;
  margin-bottom: 30px;
}

.copyright__item {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #9b9b9b;
}
.copyright__item::after {
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  background: #07bafb;
  transform: rotateY(90deg);
  transition: all 0.5s ease;
}
.copyright__item:hover::after {
  transform: rotateY(0deg);
}
.copyright__text {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #9b9b9b;
}
</style>
