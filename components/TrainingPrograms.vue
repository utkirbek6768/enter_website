<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          index: 1,
          title: "Школьникам",
          bg: "#e4edfa",
          text: "Желающие получить дополнительное образование в IT, дизайне, маркетинге и компьютерной грамотности.",
          duration: 200,
          img: "/_nuxt/public/childern-img.png",
        },
        {
          id: 2,
          index: 2,
          title: "Профессионалом",
          bg: "#EAE9FB",
          text: "Которые хотят расширить свой кругозор и приобрести новые знания в выбранных областях.",
          duration: 400,
          img: "/_nuxt/public/childern-img.png",
        },
        {
          id: 3,
          index: 3,
          title: "Студентам",
          bg: "#E5FBF1",
          text: "Желающие получить дополнительное образование в IT, дизайне, маркетинге и компьютерной грамотности.",
          duration: 600,
          img: "/_nuxt/public/childern-img.png",
        },
        {
          id: 4,
          index: 4,
          title: "Профессионалом",
          bg: "#FBE5E5",
          text: "Которые хотят расширить свой кругозор и приобрести новые знания в выбранных областях..",
          duration: 800,
          img: "/_nuxt/public/childern-img.png",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="size-control">
    <div class="section__title m-bottom">
      Для кого предназначены наши обучающие программы?
    </div>
  </div>
  <div class="trainingPrograms size-control flex m-bottom">
    <div class="trainingPrograms-slider grid grid-cols-12 gap-8">
      <div
        v-for="slide in data"
        :key="slide.id"
        :style="{ backgroundColor: slide.bg }"
        data-aos="flip-left"
        :data-aos-duration="slide.duration"
        class="trainingPrograms-card relative mx-auto col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3"
      >
        <div class="trainingPrograms-card-img flex mx-auto mb-3">
          <span class="slider__index" :style="{ color: slide.bg }">{{
            slide.index
          }}</span>
          <div class="hoverHelper">
            <div class="hoverHelper__birnima w-[100%] h-[100%]"></div>
            <img
              src="https://avatars.mds.yandex.net/i?id=185c61f3f56f9a5d190bdd877f498694e9a44d1a-7215189-images-thumbs&n=13"
              class="w-full"
            />
          </div>
          <div class="hoverHelper">
            <div class="hoverHelper__birnima w-[100%] h-[100%]"></div>
            <img
              src="https://avatars.mds.yandex.net/i?id=17ecdb82854522f2cc728b865a41e47f926b34ea-9181483-images-thumbs&n=13"
              class="w-full"
            />
          </div>
          <div class="hoverHelper">
            <div class="hoverHelper__birnima w-[100%] h-[100%]"></div>
            <img
              src="https://avatars.mds.yandex.net/i?id=d345dd5d934eedfd81b36b6f24fd9f03a8316b79-8235455-images-thumbs&n=13"
              class="w-full"
            />
          </div>
          <div class="hoverHelper">
            <div class="hoverHelper__birnima w-[100%] h-[100%]"></div>
            <img
              src="https://avatars.mds.yandex.net/i?id=4cfff00698bd1d430754b718816674f9-4054969-images-thumbs&n=13"
              class="w-full"
            />
          </div>

          <div class="hoverHelper">
            <div class="hoverHelper__birnima w-[100%] h-[100%]"></div>
            <img src="/childern-img.png" class="w-full" />
          </div>
          <div class="hoverHelper">
            <div class="hoverHelper__birnima w-[100%] h-[100%]"></div>
            <img
              src="https://avatars.mds.yandex.net/i?id=c4ef6170adece77ceaef7e3fef56e44048caa222-8497453-images-thumbs&n=13"
              class="w-full"
            />
          </div>
        </div>
        <div class="card__title">{{ slide.title }}</div>
        <div class="card__text">
          {{ slide.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hoverHelper {
  width: 100%;
  height: 100%;
  border-radius: inherit;
}
.hoverHelper img {
  border-radius: inherit !important;
  position: absolute;
  left: 0px;
  z-index: 1;
  display: none;
}

.hoverHelper__birnima {
  position: relative;
  z-index: 2;
}
.hoverHelper:nth-child(2) img {
  display: flex;
}
.hoverHelper__birnima:hover + img {
  display: block !important;
}
@media screen and (max-width: 1498px) {
  .trainingPrograms-card {
    padding: 13% 8% !important;
  }
}
@media screen and (max-width: 500px) {
  .trainingPrograms-card {
    max-width: 100% !important;
    margin: 0px !important;
  }
}
@media screen and (max-width: 370px) {
  .trainingPrograms-card {
    max-width: 320px !important;
    margin: 0 !important;
  }
  .trainingPrograms-card-img {
    border-radius: 20px;
    position: relative;
    max-width: 80%;
    height: 218px;
  }
  .card__text {
    font-size: 14px;
    margin-bottom: 36px;
  }
}
@media screen and (max-width: 350px) {
  .trainingPrograms-card {
    padding: 13% 5% !important;
    max-width: 300px !important;
    margin: 0 !important;
  }
  .trainingPrograms-card-img {
    border-radius: 20px;
    position: relative;
    max-width: 80%;
    height: 218px;
  }
  .card__text {
    font-size: 14px;
    margin-bottom: 36px;
  }
}

.section__title {
  max-width: 768px;
}
.trainingPrograms-slider {
  margin: auto;
}
.trainingPrograms-card {
  margin: auto;
  max-width: 338px;
  height: 500px;
  padding: 50px;
  background: #e6edfa;
  border-radius: 40px;
  margin: auto;
  transition: 0.5s all ease;
}

.trainingPrograms-card-img {
  background: linear-gradient(
    308.91deg,
    #ffffff 16.12%,
    rgba(255, 255, 255, 0) 95.37%
  );
  border-radius: 20px;
  position: relative;
  width: 238px;
  height: 218px;
}
.trainingPrograms-card-img img {
  width: 100%;
  height: 238px;
  position: absolute;
  bottom: 0px;
  border-radius: inherit;
}

.card__title {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  color: #383838;
  margin-bottom: 20px;
}

.card__text {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #383838;
  opacity: 0.6;
  margin-bottom: 36px;
}

.slider__index {
  font-family: "Mont";
  font-style: normal;
  font-weight: 950;
  font-size: 80px;
  line-height: 140%;
  position: absolute;
  top: 0px;
  right: 10px;
}
@media screen and (max-width: 1500px) {
  .trainingPrograms-card {
    margin-right: 5%;
  }
}
</style>
