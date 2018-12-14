import BaseCommand from "../../base/baseCommand";
import { flags } from "@oclif/command";
import { args } from "@oclif/parser";
import { stringify } from "querystring";
import { STATES } from "../../constants/mr";

export default class ListMRS extends BaseCommand {
  static description: string = "list merge requests, shows open MRs by default";
  static flags: any = {
    help: flags.help({ char: "h" }),
    state: flags.string({ char: "s", default: "open" })
  };

  async run() {
    const { args, flags } = this.parse(ListMRS);
    const query: any = {
      state: STATES[flags.state]
    };

    const queryString: string = stringify(query);

    this.makeRequest("get", `/merge_requests?${queryString}`).then(
      (res: any) => {
        res.forEach((mr: any) => {
          // console.log(mr)
          this.log(`
          Title: ${mr.title}
          Created by: ${mr.author.name} | ${mr.author.web_url}
          State: ${mr.state}
          URL: ${mr.web_url}
          `);
        });
      }
    );
  }
}
