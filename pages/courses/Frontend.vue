<template>
  <Header />
  <div class="slider">
    <MySwiper />
  </div>
  <div class="controller">
    <MyCard v-for="card in 4" />
  </div>
  <div class="controller">
    <ShopCards />
    <button>
      <NuxtLink to="/AuthorizationTest">AuthorizationTest</NuxtLink>
    </button>
  </div>
  <div class="controller">
    <FlexSlider />
  </div>
  <div class="controller">
    <CreditCardForm />
  </div>
  <!-- <div class="controller">
    <SliderCodepen />
  </div> -->
  <div class="controller">
    <Test1 />
  </div>

  <Fotter />
</template>

<script></script>

<style scoped>
.controller {
  max-width: 1440px;
  margin: auto;
  display: flex;
  position: relative;
}
</style>
