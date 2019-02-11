import { Command, flags } from "@oclif/command";
import cli from "cli-ux";
import { setConfigToCWD } from "../utils/config";

// import conf from "conf";

const ACCESS_TOKEN = "access-token";
const PROJECT_ID = "project-id";

export default class Configure extends Command {
  static description = "Configure xlab-cli";

  static flags = {
    help: flags.help({ char: "h" }),
    prompt: flags.boolean({ default: true }),
    // [ACCESS_TOKEN]: flags.string({ char: "t", name: "Access Token" }),
    // [PROJECT_ID]: flags.integer({ char: "i", name: "Project ID" })
  };

  private async getPrompts(): Promise<any> {
    const accessToken = await cli.prompt("Your access token");
    const projectID = await cli.prompt("project id");

    return Promise.resolve({ accessToken, projectID });
  }

  public async run() {
    const { flags } = this.parse(Configure);

    if (flags.prompt) {
      const prompts = await this.getPrompts();

      try {
        setConfigToCWD(prompts);
        this.log("Configurations are set! please set this file in your .gitignore file");
      } catch (e) {
        this.error(e.message);
      }
      // this.setConfig(prompts);
    } else {
      this.warn("This feature is not implemented yet, sorryyy!!");
    }
  }
}
