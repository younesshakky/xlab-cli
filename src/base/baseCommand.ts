import Command from "@oclif/command";
import { AxiosResponse, AxiosError } from "axios";
import { cli } from "cli-ux";

import http from "../utils/http";
import { getConfig, getConfigSync } from "../utils/userStore";
import parseError from "../utils/parseError";

// @ts-ignore
export default class BaseCommand extends Command {
  entity = "projects"; // project by default

  public getConfig() {
    return getConfigSync(this.config.configDir);
  }

  public async makeRequest(method: string, URL: string, body?: any) {
    // @ts-ignore
    const request = http[method];
    const config = this.getConfig();
    const URLWithToken = `/${this.entity}/${config.projectID}${URL}`;

    cli.action.start("working...");

    return new Promise((resolve, reject) => {
      request(URLWithToken, body)
        .then((res: AxiosResponse) => {
          cli.action.stop();
          resolve(res.data);
        })
        .catch((err: AxiosError) => {
          cli.action.stop();
        });
    });
  }
}
