import { flags } from "@oclif/command";
import BaseCommand from "../../base/baseCommand";

export default class DeleteMR extends BaseCommand {
  static flags = {
    help: flags.help({ char: "h" })
  };

  static args = [
    {
      name: "id",
      required: true,
      desctription: "Merge request id"
    }
  ];

  async run() {
    const { args } = this.parse(DeleteMR);

    this.makeRequest("delete", `/merge_requests/${args.id}`, null).then(
      (res: any) => {
        this.log(`Merge request ${args.id} deleted successfully`);
      }
    );
  }
}
