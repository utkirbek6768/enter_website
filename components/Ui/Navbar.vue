<template>
  <ul class="navbar-control">
    <Dropdown v-for="dataNavbar in dataNavbar" :dataNavbar="dataNavbar" />
  </ul>
</template>
<script>
export default {
  data() {
    return {
      showDown: false,
      dataNavbar: [
        {
          href: "/AllCourses",
          title: "Все курсы",
          menuItems: [
            {
              subLink: "/courses/Frontend",
              subTitle: "Frontend dasturlash",
            },
            { subLink: "/courses/Backend", subTitle: "Backend dasturlash" },
            { subLink: "/courses/AndroidDev", subTitle: "Android dasturlash" },
            { subLink: "/courses/WebDesign", subTitle: "Web dizayn" },
          ],
        },
        {
          href: "/Promotions",
          title: "Акции и скидки",
        },
        {
          href: "/Jobs",
          title: "Вакансии",
        },
        {
          href: "/AboutCompany",
          title: "О компании",
        },
        {
          href: "/Contacts",
          title: "Контакты",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style scoped>
.navbar-control {
  display: flex;
}

.droupdown__link {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.5;
  color: #383838;
}
@media screen and (max-width: 970px) {
  .navbar-control {
    display: none;
  }
}
</style>
