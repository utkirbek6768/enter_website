<template>
  <div class="graduatesCard m-auto">
    <div class="graduates-avatar">
      <img src="/childern-img.png" alt="" />
    </div>
    <div class="graduates-text-control">
      <div class="graduates__title">Хожиакбар Анорбоев</div>
      <div class="graduates__text">
        Я окончил курс программирования Python в этой школе и очень доволен
        своим выбором. Курсы были построены очень грамотно, начиная с базовых
        концепций языка и заканчивая созданием собственных проектов.
      </div>
      <span class="relative">
        <NuxtLink to="/"
          ><span class="graduates-card-link">Читать историю</span></NuxtLink
        >
      </span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@media screen and (max-width: 800px) {
  .graduates-avatar {
    width: 40%;
    height: 220px;
    position: relative;
    bottom: 0px;
    background: white;
    border-radius: 15px;
    margin-right: 46px;
  }
}
@media screen and (max-width: 800px) {
  .graduatesCard .graduates__title {
    margin-bottom: 10px;
  }
  .graduatesCard .graduates__text {
    margin-bottom: 10px;
  }
}
@media screen and (max-width: 700px) {
  .graduatesCard {
    height: 300px !important;
    border-radius: 40px;
    padding: 30px !important;
    display: flex;
    align-items: center !important;
    margin: auto;
  }
  .graduatesCard .graduates__title {
    margin-bottom: 10px !important;
    font-size: 18px;
  }
  .graduatesCard .graduates__text {
    font-size: 14px;
    margin-bottom: 1px !important;
  }
}
@media screen and (max-width: 600px) {
  .graduatesCard {
    max-width: 450px !important;
    border-radius: 30px !important;
    flex-direction: column;
    height: auto !important;
  }

  .graduates-avatar {
    margin: auto !important;
    margin-bottom: 30px !important;
  }
}
.graduatesCard {
  max-width: 828px;
  height: 338px;
  background: #e6edfa;
  border-radius: 40px;
  padding: 50px;
  display: flex;
  align-items: flex-end;
  margin: auto;
}

.graduates-text-control {
  max-width: 440px;
}

/* .graduates-text-control .graduates-card-link::after {
  content: "";
  width: 100%;
  height: 3px;
  background: #7000ff;
  padding-bottom: 5px;
} */
.graduates-text-control {
  position: relative;
}
.graduates-card-link::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0px;
  right: 100%;
  height: 3px;
  background-color: #07bafb;
  display: block;
  opacity: 0;
  transition: 0.6s all ease;
}
.graduates-card-link:hover:after {
  right: 0;
  opacity: 1;
}

.graduates-avatar {
  min-width: 226px;
  height: 226px;
  position: relative;
  bottom: 0px;
  background: white;
  border-radius: 15px;
  margin-right: 46px;
}

.graduates-avatar img {
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-radius: inherit;
  width: 226px;
  height: 250px;
}

.graduates__title {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  color: #383838;
  margin-bottom: 30px;
}

.graduates__text {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #383838;
  margin-bottom: 42px;
}
</style>
