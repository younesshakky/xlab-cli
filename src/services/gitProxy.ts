import execute from "../utils/execute";
import { LAST_COMMIT, CURRENT_BRANCH } from "../constants/git";

interface IGitProxy {
  getCurrentBranch: () => {};
  lastCommit: () => {};
}

export default class GitProxy implements IGitProxy {
  async getCurrentBranch() {
    let branch = null;

    try {
      branch = await execute(CURRENT_BRANCH);
    } catch (e) {
      branch = null; // it's soo wtfker operation
    }
    return branch;
  }

  async lastCommit() {
    let commit = null;

    try {
      commit = await execute(LAST_COMMIT);
    } catch (e) {
      commit = null;
    }

    return commit;
  }
}
