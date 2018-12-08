import Command, { flags } from "@oclif/command";
import { args } from "@oclif/parser";
import http from "../../services/http";
import { getConfig } from "../../utils/userStore";

export default class DeleteMR extends Command {
  static flags = {
    help: flags.help({ char: "h" })
  };

  query: any = null;

  static args = [
    {
      name: "id",
      required: true,
      desctription: "Merge request id"
    }
  ];

  makeRequest(MRID: any): any {
    const { projectID, accessToken } = this.query;
    http
      .delete(
        `/projects/${projectID}/merge_requests/${MRID}?private_token=${accessToken}`
      )
      .then(res => this.showFollowUp(res.data));
  }

  showFollowUp(response: any): any {
    this.log(`Merge request deleted successfully`);
  }

  async init() {
    const config = await getConfig(this.config.configDir);

    this.query = { ...config };
  }

  async run() {
    const { args } = this.parse(DeleteMR);

    this.makeRequest(args.id);
  }
}
