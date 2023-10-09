import axios from "axios";

const eAxios = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default eAxios;
