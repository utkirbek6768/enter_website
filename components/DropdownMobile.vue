<template>
  <li
    @mouseover="showMenu = true"
    @mouseleave="showMenu = false"
    class="saidbar-link mb-[10px]"
  >
    <div class="saidbar__title relative cursor-pointer">
      <NuxtLink :href="dataNavbar.href"> {{ dataNavbar.title }}</NuxtLink>
    </div>
    <div v-if="showMenu && dataNavbar.menuItems" class="">
      <div class="">
        <ul class="saidbar-dropdown-list">
          <li
            v-for="navLink in dataNavbar.menuItems"
            :key="dataNavbar.index"
            class="saidbar-dropdown__link"
          >
            <NuxtLink to="/"
              ><span class="link-helper">{{ navLink }}</span></NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </li>
  <div v-if="showMenu && dataNavbar.menuItems" class=""></div>
</template>

<script>
export default {
  props: {
    dataNavbar: {
      type: Array,
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
.saidbar-link::after {
  content: "";
  height: 3px;
  width: 100%;
  background-color: #c9e7f2;
  display: block;
  transform: rotateY(90deg);
  transition: 0.6s all ease;
}
.saidbar-link:hover::after {
  transform: rotateY(0deg);
}

.link-helper {
  position: relative;
}
.link-helper::after {
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
.saidbar-dropdown-list {
  margin: 20px 0px;
  padding: 5%;
}
.saidbar-dropdown__link:hover .link-helper:after {
  right: 0;
  opacity: 1;
}
</style>
