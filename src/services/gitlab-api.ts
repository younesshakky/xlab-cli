import http from "../utils/http";
import { Config } from "@oclif/config";
import { getConfigSync } from "../utils/config";

class GitlabApi {

  public getAssignees = (query: string): Promise<any[]> => {
    const { projectID } = getConfigSync();

    return new Promise((resolve, reject) => {
      http
        .get(`/projects/${projectID}/members/all/?query=${query}`)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  };

  public getAssignee = (query: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      this.getAssignees(query)
        .then(assignees => resolve(assignees[0] || null))
        .catch(err => reject(err));
    });
  };
}

export default new GitlabApi();
