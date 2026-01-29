import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost", // fake base, няма да прави реални HTTP заявки
});