import { flags } from "@oclif/command";

import BaseCommand from "../../base/baseCommand";
import GitProxy from "../../services/gitProxy";
import { formatQuery } from "../../utils/formatters";
import { MRqueryPattern } from "../../constants/patterns";
import { cli } from "cli-ux";
import http from "../../utils/http";
import { IFlag } from "@oclif/parser/lib/flags";
import GitlabApi from "../../services/gitlab-api";

export default class OpenMR extends BaseCommand {
  static description: string = "Open new merge request";
  static flags: any = {
    help: flags.help({ char: "h" }),
    title: flags.string({
      char: "c",
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

    assignee: flags.string({
      char: "a",
      description: "Assignee"
    }),

    assign: flags.boolean({
      char: "w",
      description: "list assignees",
      default: false
    }),

    description: flags.string({
      char: "d",
      description: "Description"
    })
  };

  gitProxy: GitProxy = new GitProxy();
  gitlabApi: GitlabApi = new GitlabApi();

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
      assignee: assigneeQuery,
      ...rest
    } = flags;

    let assigneeId = null;

    if (assigneeQuery) {
      cli.action.start("searching for assignee");

      await this.gitlabApi.getAssignee(assigneeQuery).then(assignee => {
        if (assignee) {
          assigneeId = assignee.id;
        } else {
          this.error("No such assignee");
          this.exit();
        }
      });
    }

    const query = { title, source, assignee: assigneeId, ...rest };

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
