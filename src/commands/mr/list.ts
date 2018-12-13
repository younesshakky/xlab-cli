import { flags } from "@oclif/command";
import BaseCommand from "../../base/baseCommand";
import { args } from "@oclif/parser";

export default class ListMRS extends BaseCommand {
  static flags: any = {
    help: flags.help({ char: "h" })
  };

  // static args: any[] = [
  //   {
  //     name: "id",
  //     required: true,
  //     desctription: "Merge request id"
  //   }
  // ];

  async run() {
    const { args } = this.parse(ListMRS);

    this.makeRequest("get", `/merge_requests`).then((res: any) => {
      res.forEach((mr: any) => {
        this.log(`
        Title: ${mr.title}
        Created by: ${mr.author.name} | ${mr.author.web_url}
        State: ${mr.state}
        URL: ${mr.web_url}
        `);
      });
    });
  }
}
