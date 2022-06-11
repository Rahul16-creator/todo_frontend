import axios from "axios";

const platformApi = axios.create({
  baseURL: "http://localhost:3000/api/v1/todoList",
  headers: {
    "Content-Type": "application/json",
  },
});

export { platformApi };
