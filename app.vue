<template>
  <div class="wrapper">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600&family=Work+Sans:wght@400;500&display=swap");
* {
  margin: 0;
  padding: 0;
  transition: all 0.5s ease;
}
::-webkit-scrollbar {
  width: 20px;
}
.wrapper {
  background-color: white;
  overflow: hidden;
}
.section__title {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 140%;
  color: #383838;
}

.size-control {
  max-width: 1440px;
  margin: auto;
}
.courses {
  min-height: 50vh;
  max-width: 1440px;
  margin: auto;
}
.m-bottom {
  margin-bottom: 90px;
}
@media screen and (max-width: 1500px) {
  .section__title {
    font-size: 40px;
  }
  .size-control {
    margin: 0% 4%;
  }
  .m-bottom {
    margin-bottom: 60px;
  }
}
@media screen and (max-width: 768px) {
  .section__title {
    font-size: 24px;
  }
  .size-control {
    margin: 0% 4%;
  }
  .m-bottom {
    margin-bottom: 40px;
  }
}
@media screen and (max-width: 400px) {
  .section__title {
    font-size: 20px;
  }
  .size-control {
    margin: 0% 4%;
  }
  .m-bottom {
    margin-bottom: 40px;
  }
}
</style>
