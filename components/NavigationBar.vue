<template>
  <div class="burger-btn" :class="{ active: isOpen }" @click.prevent="toggle">
    <slot>
      <button type="button" class="burger-button" title="Menu">
        <span class="hidden">Toggle menu</span>
        <span class="burger-bar burger-bar--1"></span>
        <span class="burger-bar burger-bar--2"></span>
        <span class="burger-bar burger-bar--3"></span>
      </button>
    </slot>
  </div>
  <div
    v-if="isOpen"
    class="saidbar fixed right-0 top-0 h-[100vh] w-[100%] pt-[150px] flex justify-between"
  >
    <div
      @click="isOpen = false"
      class="curtain h-auto w-auto w-auto border"
    ></div>
    <div
      class="burger-btn btn--close"
      :class="{ active: isOpen }"
      @click="isOpen = false"
    >
      <slot>
        <button type="button" class="burger-button" title="Menu">
          <span class="hidden">Toggle menu</span>
          <span class="burger-bar burger-bar--1"></span>
          <span class="burger-bar burger-bar--2"></span>
          <span class="burger-bar burger-bar--3"></span>
        </button>
      </slot>
    </div>

    <ul @click="isOpen = true" class="saidbar-list border h-[100%]">
      <li>
        <DropdownMobile
          v-for="dataNavbar in dataNavbar"
          :dataNavbar="dataNavbar"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      dataNavbar: [
        {
          href: "#",
          title: "Все курсы",
          menuItems: [
            "Frontend dasturlash",
            "Backend dasturlash",
            "Android dasturlash",
            "Web dizayn",
          ],
        },
        {
          href: "#",
          title: "Акции и скидки",
          menuItems: [
            "Frontend dasturlash",
            "Backend dasturlash",
            "Android dasturlash",
            "Web dizayn",
          ],
        },
        {
          href: "#",
          title: "Вакансии",
        },
        {
          href: "#",
          title: "О компании",
        },
        {
          href: "#",
          title: "Контакты",
        },
      ],
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.saidbar-list {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 200px;
  height: 100%;
  background: #f5f5f5;
  padding: 80px 20px;
}
.saidbar {
  z-index: 92;
  background: rgba(26, 19, 19, 0.4);
}
.curtain {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
}
.btn--close {
  position: absolute;
  right: 2.5%;
  top: 5%;
}
.hidden {
  visibility: hidden;
}

button {
  cursor: pointer;
}

button:focus {
  outline: 0;
}

.burger-button {
  position: relative;
  height: 30px;
  width: 32px;
  display: block;
  z-index: 60;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: none;
}

.burger-bar {
  background-color: #000;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: -1px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
  transform-origin: 100% 50%;
  transform: scaleX(0.8);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

.burger-bar--3 {
  transform: translateY(6px);
}

.active .burger-button {
  transform: rotate(-180deg);
}

.active .burger-bar--1 {
  transform: rotate(45deg);
}

.active .burger-bar--2 {
  opacity: 0;
}

.active .burger-bar--3 {
  transform: rotate(-45deg);
}
@media screen and (max-width: 970px) {
  .burger-button {
    display: block;
  }
}
</style>
