import axios, { AxiosInstance } from "axios";
import { getConfigSync } from "./config";
import parseError from "./parseError";
import { cli } from "cli-ux";


const instace: AxiosInstance = axios.create({
  baseURL: "https://gitlab.com/api/v4",
  headers: {
    "Content-Type": "application/json",
    "PRIVATE-TOKEN": getConfigSync().accessToken
  }
});

instace.interceptors.response.use(undefined, err => {
  cli.log("ERROR :" + parseError(err));
  return Promise.reject(err);
});

export default instace;
