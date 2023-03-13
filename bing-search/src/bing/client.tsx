import axios from "axios";

// PROVIDE A DEFAULT BING API AXIOS INSTANCE
const instance = axios.create({
  baseURL: import.meta.env.VITE_BING_ENDPOINT,
  timeout: 60000,
  headers: {
    "Ocp-Apim-Subscription-Key": import.meta.env.VITE_BING_KEY,
  },
});

export default instance;
