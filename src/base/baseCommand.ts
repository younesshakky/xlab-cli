import Command from "@oclif/command";
import { AxiosResponse, AxiosError } from "axios";
import { cli } from "cli-ux";

import http from "../services/http";
import { getConfig } from "../utils/userStore";
import parseError from "../utils/parseError";

// @ts-ignore
export default class BaseCommand extends Command {
  entity = "projects"; // project by default

  private async getConfig(): Promise<any> {
    return getConfig(this.config.configDir);
  }

  public async makeRequest(method: string, URL: string, body?: any) {
    const request = http[method];
    const config = await this.getConfig();
    const URLWithToken = `/${this.entity}/${
      config.projectID
    }${URL}?private_token=${config.accessToken}`;

    this.log(URLWithToken);
    cli.action.start("working...");

    return new Promise((resolve, reject) => {
      request(URLWithToken, body)
        .then((res: AxiosResponse) => {
          cli.action.stop();
          resolve(res.data);
        })
        .catch((err: AxiosError) => {
          cli.action.stop();
          this.log(parseError(err));
          // reject(err);
        });
    });
  }
}
