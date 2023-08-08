<template>
  <li
    @mouseover="showMenu = true"
    @mouseleave="showMenu = false"
    class="navbar__link"
  >
    <div class="dropdown__title relative cursor-pointer">
      <NuxtLink :href="dataNavbar.href"> {{ dataNavbar.title }}</NuxtLink>
    </div>
    <div v-if="showMenu && dataNavbar.menuItems" class="sub-menu w-100">
      <div class="size-control w-[100%] flex">
        <ul class="dropdown-list w-[50%]">
          <li
            v-for="navLink in dataNavbar.menuItems"
            :key="dataNavbar.index"
            class="dropdovn__link mb-3"
          >
            <NuxtLink :href="navLink.subLink"
              ><span class="birnima">{{ navLink.subTitle }}</span></NuxtLink
            >
          </li>
        </ul>
        <div
          class="advertising w-[50%] h-auto bg-[#c9e7f2] flex items-center justify-center rounded-[15px]"
        >
          <NuxtLink to="/"><h1 class="text-[40px]">Advertising</h1></NuxtLink>
        </div>
      </div>
    </div>
  </li>
  <div
    v-if="showMenu && dataNavbar.menuItems"
    class="curtain w-[100vh] h-[200vh]"
  ></div>
</template>

<script>
export default {
  props: {
    dataNavbar: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style scoped>
.curtain {
  background: rgba(26, 19, 19, 0.4);
  position: absolute;
  top: 150px;
  left: 0px;
  width: 100%;
  z-index: 3;
}
.sub-menu {
  position: absolute;
  left: 0px;
  top: 136px;
  width: 100%;
  height: auto;
  border-top: 1px solid #c9e7f2;
  background-color: white;
  z-index: 99;
  padding: 80px 0px;
}

.navbar__link {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  display: flex;
  align-items: center;

  color: #383838;
  padding-right: 20px;
  height: 138px !important;
}
.navbar__link::after {
  content: "";
  height: 3px;
  width: 100%;
  background-color: #c9e7f2;
  display: block;
  transform: rotateY(90deg);
  transition: 0.6s all ease;
}
.navbar__link:hover::after {
  transform: rotateY(0deg);
}

.birnima {
  position: relative;
}
.birnima::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0px;
  right: 100%;
  height: 3px;
  background-color: #c9e7f2;
  display: block;
  opacity: 0;
  transition: 0.6s all ease;
}
.dropdovn__link:hover .birnima:after {
  right: 0;
  opacity: 1;
}
@media screen and (min-width: 1000px) and (max-width: 1111px) {
  .navbar__link {
    padding: 0px 5px;
    font-size: 14px;
  }
}
</style>
