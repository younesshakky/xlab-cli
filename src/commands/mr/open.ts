import { flags } from "@oclif/command";

import BaseCommand from "../../base/baseCommand";
import GitProxy from "../../services/gitProxy";
import { formatQuery } from "../../utils/formatters";
import { MRqueryPattern } from "../../constants/patterns";
import { cli } from "cli-ux";

export default class OpenMR extends BaseCommand {
  static description = "Open new merge request";
  static flags = {
    help: flags.help({ char: "h" }),
    title: flags.string({
      char: "h",
      description:
        "MR title. defaults to the last commit message if none is provided"
    }),
    source: flags.string({
      char: "s",
      description:
        "Source branch. defaults to your current branch if none is provided"
    }),
    target: flags.string({
      char: "t",
      description: "Target branch. defaults to DEV if none is provided",
      default: "DEV",
      required: true
    }),

    assignee: flags.integer({
      char: "a",
      description: "Assignee"
    }),

    description: flags.string({
      char: "d",
      description: "Description"
    })
  };

  gitProxy: GitProxy = new GitProxy();

  showFollowUp(response: any): any {
    this.log(`
      Merge request created successfully
      open: ${response.web_url}
    `);
  }

  async run() {
    const { flags } = this.parse(OpenMR);

    const {
      title = await this.gitProxy.lastCommit(),
      source = await this.gitProxy.getCurrentBranch(),
      ...rest
    } = flags;

    const query = { title, source, ...rest };

    this.makeRequest(
      "post",
      `/merge_requests`,
      formatQuery(MRqueryPattern, query)
    ).then((response: any) => {
      this.log(`
          Merge request created successfully
          open: ${response.web_url}
        `);
    });
  }
}
