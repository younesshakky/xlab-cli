import axios, { AxiosInstance } from "axios";

const instace: AxiosInstance | any = axios.create({
  baseURL: "https://gitlab.com/api/v4",
  headers: {
    "Content-Type": "application/json"
  }
});

export default instace;
