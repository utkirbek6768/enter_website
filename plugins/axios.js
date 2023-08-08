import axios from "axios";
export default defineNuxtPlugin(async () => {
  //   const defaultUrl = "https://jsonplaceholder.typicode.com/";
  const defaultUrl = "https://reqres.in";

  let api = axios.create({
    baseURL: defaultUrl,
    headers: {
      common: {},
    },
  });
  return {
    provide: {
      api: api,
    },
  };
});
