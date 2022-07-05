import axios from "axios";

export const api = axios.create({
  baseURL: "https://dtmoney-sable.vercel.app/api",
});
