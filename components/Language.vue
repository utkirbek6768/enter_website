<template>
  <div class="v-select">
    <p @click="areOptionsVisible = !areOptionsVisible">{{ selected }}</p>
    <div v-if="areOptionsVisible" class="options">
      <span
        class="langItem"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      areOptionsVisible: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.areOptionsVisible = false;
    },
  },
};
</script>

<style scoped>
.v-select {
  width: 40px !important;
  height: 40px !important;
  border-radius: 100%;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border: none;
  margin: 50px auto;
  position: relative;
}
.options {
  text-align: center;
  display: flex;
  position: absolute;
  top: 120%;
  left: -50px;
  min-width: 100px;
  height: auto;
}
.langItem {
  width: 40px !important;
  height: 40px !important;
  border-radius: 100%;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border: none;
  position: relative;
  transform: scale(1);
  transition: 0.5s all ease;
}
.langItem:hover {
  transform: scale(1.2);
}
</style>
