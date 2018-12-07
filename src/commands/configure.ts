import { Command, flags } from "@oclif/command";
import cli from "cli-ux";
import { getConfig, setConfig } from "../utils/userStore";

// import conf from "conf";

const ACCESS_TOKEN = "access-token";
const PROJECT_ID = "project-id";

export default class Configure extends Command {
  static description = "Configure gitlab-cli";

  static flags = {
    help: flags.help({ char: "h" }),
    prompt: flags.boolean({ default: false }),
    [ACCESS_TOKEN]: flags.string({ char: "t" }),
    [PROJECT_ID]: flags.integer({ char: "i" })
  };

  private async getPrompts(): Promise<any> {
    const accessToken = await cli.prompt("Your access token");
    const projectID = await cli.prompt("project id");

    return Promise.resolve({ accessToken, projectID });
  }

  private async setConfig(config: object) {
    return setConfig(this.config.configDir, config);
  }

  public async run() {
    const { flags } = this.parse(Configure);

    if (flags.prompt) {
      const prompts = await this.getPrompts();
      this.setConfig(prompts);
    } else {
      this.warn("This feature is not implemented yet, sorryyy!!");
    }
  }
}
