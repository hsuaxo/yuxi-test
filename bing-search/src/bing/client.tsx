import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BING_ENDPOINT,
  timeout: 60000,
  params: {
    count: 25,
  },
  headers: {
    "Ocp-Apim-Subscription-Key": import.meta.env.VITE_BING_KEY,
  },
});

export default instance;
