import { flags } from "@oclif/command";
import BaseCommand from "../../base/baseCommand";

export default class StateMR extends BaseCommand {
  static flags = {
    help: flags.help({ char: "h" })
  };

  static args = [
    {
      name: "id",
      required: true,
      description: "MR id"
    },

    {
      name: "state",
      required: true,
      description: "State of MR close/reopen"
    }
  ];

  async run() {
    const { args } = this.parse(StateMR);

    this.makeRequest("put", `/merge_requests/${args.id}`, {
      state_event: args.state
    })
      .then((res: any) => {
        this.log(`
        Changed merge request state to "${res.state}"
      `);
      })
      .catch(err => {
        this.log(err.response.data);
      });
  }
}
