import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:3500/",// this is your base URL
});
