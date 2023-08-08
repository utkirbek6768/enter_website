<script>
export default {
  data() {
    return {
      options: [
        { name: "uz", value: 1 },
        { name: "eng", value: 2 },
        { name: "ru", value: 3 },
      ],
      selected: "ru",
    };
  },
  methods: {
    optionSelect(option) {
      this.selected = option.name;
    },
  },
};
</script>

<template>
  <div class="personal-control">
    <UiSearchModal />
    <Language
      :options="options"
      @select="optionSelect"
      :selected="selected"
      class="personal-btn"
    />
    <button class="personal-btn">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_3_38)">
          <path
            d="M10 1H13.3333C13.7754 1 14.1993 1.16389 14.5118 1.45561C14.8244 1.74733 15 2.143 15 2.55556V13.4444C15 13.857 14.8244 14.2527 14.5118 14.5444C14.1993 14.8361 13.7754 15 13.3333 15H10"
            stroke="#383838"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 12L10 8L6 4"
            stroke="#383838"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 8H1"
            stroke="#383838"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_3_38">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
    <button class="personal--user__btn">Личный кабинет</button>
  </div>
</template>

<style scoped>
.form-control {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px 16px;
  gap: 2px;
  isolation: isolate;
  width: 500px;
  background: #f5f5f5;
  border-radius: 10px;
}
.form-item {
  height: 100%;
  width: auto;
}

.modal-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1px 80px;
  width: 207px;
  background: #383838;
  border-radius: 10px;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
}

.personal-btn {
  width: 40px !important;
  height: 40px !important;
  border-radius: 100%;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border: none;
  cursor: pointer;
  outline: 0px solid #c9e7f2;
  transition: 0.6s all ease;
}
.personal-btn:hover {
  outline: 5px solid #c9e7f2;
}

.personal-control {
  display: flex;
  margin-left: auto;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  display: flex;
  align-items: center;

  /* Unnamed Color */

  color: #383838;
}

.personal--user__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
}
@media screen and (max-width: 1200px) {
  .personal--user__btn {
    display: none;
  }
}
</style>
