<template>
  <div class="m-auto">
    <form
      @submit.prevent
      class="w-[100%] p-5 border max-w-[400px] m-auto my-8 rounded-[15px] flex flex-col bg-green-50"
    >
      <!-- <label class="py-3" for="userName">User Name</label>
      <input
        v-model="userName"
        type="text"
        name="userName"
        class="border focus:outline-none w-[100%] mb-4 p-3 rounded-[10px]"
      /> -->
      <span>{{ userToken }}</span>
      <label class="py-3" for="email">Email</label>
      <input
        v-model="email"
        type="text"
        name="email"
        class="border focus:outline-none w-[100%] mb-4 p-3 rounded-[10px]"
      />
      <label class="py-3" for="password">Password</label>
      <input
        v-model="password"
        type="password"
        name="password"
        class="border focus:outline-none w-[100%] mb-4 p-3 rounded-[10px]"
      />
      <button
        @click="register"
        class="border ml-auto p-[10px] bg-blue-100 rounded-[5px]"
      >
        REGISTER
      </button>
    </form>
  </div>
  <div
    @click="getUser"
    class="size-control p-5 text-center rounded-[15px] bg-red-100 col-span-12 border"
  >
    <span>Get User</span>
  </div>
  <div class="grid grid-cols-4 gap-3 size-control">
    <div v-for="user in users" class="user-card p-[10px] border rounded-[15px]">
      <img :src="user.avatar" class="w-[100%] rounded-[10px]" />
      <div class="col-span-12 py-5">{{ user.last_name }}</div>
      <hr />
      <div class="col-span-12 py-5">{{ user.first_name }}</div>
      <hr />
      <div class="col-span-12 py-5">{{ user.email }}</div>
    </div>
    <ul>
      <li v-for="(pagesData, index) in pages.total_pages" class="border">
        {{ index + 1 }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const users = ref("");
const email = ref(null);
const password = ref(null);
const userToken = ref(null);
const pages = ref({
  page: 1,
  per_page: 6,
  total: 12,
  total_pages: 2,
});

const getUser = async () => {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.get(
      `/api/users?page=${pages.page}&per_page=${pages.per_page}`
    );
    users.value = response.data.data;
    pages.page = response.page;
    pages.per_page = response.per_page;
    pages.total = response.total;
    pages.total_pages = response.total_pages;
  } catch (err) {
    console.error(err);
  }
};

const register = async () => {
  const { $api } = useNuxtApp();
  const signup = {
    email: email.value,
    password: password.value,
  };
  try {
    const response = await $api.post("/api/register", signup);
    localStorage.setItem("authToken", response.data.token);
    userToken.value = localStorage.authToken;
    email.value = "";
    password.value = "";
  } catch (err) {
    console.error(err);
  }
};
watchEffect(() => {
  getUser();
});
</script>

<style scoped></style>
