<template>
  <div
    v-if="showModal"
    class="modal-control relative flex flex-nowrap rounded-[20px]"
  >
    <form @submit.prevent class="form-control">
      <input
        type="text"
        placeholder="Что мы ищем?"
        class="form-item h-[100%] w-auto focus:outline-none px-[10px]"
      />
    </form>
  </div>
  <button
    @click="showModal = !showModal"
    class="showModal mx-[10px] w-[40px] h-[40px] rounded-[100%] flex justify-center items-center bg-[#f5f5f5]"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="7" stroke="#383838" />
      <path d="M20 20L16 16" stroke="#383838" stroke-linecap="square" />
    </svg>
  </button>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped>
@media screen and (min-width: 1000px) and (max-width: 1111px) {
  .form-item {
    margin: 0px;
  }
}
@media screen and (max-width: 600px) {
  .modal-control {
    position: absolute;
    top: 95px;
    left: 5%;
    width: 90%;
    margin: auto;
  }
}
.modal-control {
  height: 40px;
  transition: 0.6s all ease;
  background: #f5f5f5;
  flex-wrap: nowrap;
}
.form-control {
  border-radius: inherit;
  transition: 1s all ease;
  width: 100%;
  animation: formAnime 1s all ease;
  transition: all 1s ease;
  flex-wrap: nowrap;
}
.form-item {
  background: transparent;
}
.form-helper {
  z-index: 1;
}

@keyframes formAnime {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>
