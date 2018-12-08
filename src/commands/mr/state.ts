import Command, { flags } from "@oclif/command";
import { args } from "@oclif/parser";
import http from "../../services/http";
import { getConfig } from "../../utils/userStore";

export default class StateMR extends Command {
  static flags = {
    help: flags.help({ char: "h" })
  };

  query: any = null;

  static args = [
    {
      name: "id",
      required: true,
      description: "MR id"
    },

    {
      name: "state",
      required: true,
      description: "state of mr open/close"
    }
  ];

  makeRequest(MRID: number, state: string): any {
    const { projectID, accessToken } = this.query;
    http
      .post(
        `/projects/${projectID}/merge_requests/${MRID}?private_token=${accessToken}`,
        { state }
      )
      .then(res => this.showFollowUp(res.data));
  }

  showFollowUp(response: any): any {
    this.log(`Changed merge request state to "${response.state}"`);
  }

  async init() {
    const config = await getConfig(this.config.configDir);

    this.query = { ...config };
  }

  async run() {
    const { args } = this.parse(StateMR);

    this.makeRequest(args.id, args.state);
  }
}
