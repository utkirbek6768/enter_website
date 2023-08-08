<template>
  <div class="vacancies m-bottom">
    <div class="size-control flex justify-between m-bottom">
      <div class="vacancies__title section__title">Вакансии и стажировки</div>
      <NuxtLink class="flex gap-3"
        ><span class="title__span">Все предложения</span>
        <span class="title__span"
          ><svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L7 7L1 13" stroke="#383838" /></svg></span
      ></NuxtLink>
    </div>
    <div class="size-control">
      <UiVacansie
        v-for="vacansiesData in vacansiesData"
        :vacansiesData="vacansiesData"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      vacansiesData: [
        {
          title: "Графический Дизайнер",
          companyName: "ООО «UZUM TECHNOLOGIES»",
          price: "от 8 000 000 сумов",
          jobTime: "Полная занятость, полный день",
          helperTime: 400,
        },
        {
          title: "Графический Дизайнер",
          companyName: "ООО «UZUM TECHNOLOGIES»",
          price: "от 8 000 000 сумов",
          jobTime: "Полная занятость, полный день",
          helperTime: 600,
        },
        {
          title: "Графический Дизайнер",
          companyName: "ООО «UZUM TECHNOLOGIES»",
          price: "от 8 000 000 сумов",
          jobTime: "Полная занятость, полный день",
          helperTime: 800,
        },
        {
          title: "Графический Дизайнер",
          companyName: "ООО «UZUM TECHNOLOGIES»",
          price: "от 8 000 000 сумов",
          jobTime: "Полная занятость, полный день",
          helperTime: 1000,
        },
      ],
    };
  },
};
</script>
<style scoped>
.title__span {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: #17a2d6;
}
</style>
