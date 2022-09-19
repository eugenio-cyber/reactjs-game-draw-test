import axios from "axios";

export default axios.create({
  baseURL: "https://game-backend-teste.herokuapp.com",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
