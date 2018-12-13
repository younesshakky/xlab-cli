import axios, { AxiosInstance } from "axios";
import { Config } from "@oclif/config";
import { getConfigSync } from "./userStore";
import parseError from "./parseError";
import { cli, ux, ActionBase } from "cli-ux";
import { rejects } from "assert";

const config = new Config({ root: "" });

const instace: AxiosInstance = axios.create({
  baseURL: "https://gitlab.com/api/v4",
  headers: {
    "Content-Type": "application/json",
    "PRIVATE-TOKEN": getConfigSync(config.configDir).accessToken
  }
});

instace.interceptors.response.use(undefined, err => {
  cli.log("ERROR :" + parseError(err));
  return Promise.reject(err);
});

export default instace;
