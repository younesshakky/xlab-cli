import execute from "../utils/execute";
import { LAST_COMMIT, CURRENT_BRANCH } from "../constants/git";

interface IGitProxy {
  getCurrentBranch: () => {};
  lastCommit: () => {};
}

class GitProxy implements IGitProxy {
  async getCurrentBranch() {
    try {
      return await execute(CURRENT_BRANCH);
    } catch (e) {
      return null; // it's soo wtfker operation
    }
  }

  async lastCommit() {
    try {
      return await execute(LAST_COMMIT);
    } catch (e) {
      return null;
    }
  }
}

export default new GitProxy();
