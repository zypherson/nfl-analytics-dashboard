import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const api = axios.create({
  baseURL: "https://v1.american-football.api-sports.io/",
  headers: {
    "x-apisports-key": API_KEY,
  },
});