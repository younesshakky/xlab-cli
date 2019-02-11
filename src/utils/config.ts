import * as fs from "fs-extra";
import * as path from "path";

type conf = {
  accessToken: string;
  projectID: string;
  defaultTarget?: string
};

const CONF_FILENAME = ".xlab-clirc";

const getConfigPathMOD = () => {
  return path.join(process.cwd(), CONF_FILENAME);
};

export const getConfigSync = (): conf | any => {
  try {
    return fs.readJsonSync(getConfigPathMOD());
  } catch (e) {
    throw new Error("bikh lazagna");
  }
};

/* Reads json from config file or create it if it doesn't exists */

const getConfigFileOrCreate = (dir: string) => {
  let data = {};

  try {
    data = fs.readJSONSync(dir);
  } catch (e) {
    if (e.code == "ENOENT") {
      fs.createFileSync(dir);
    }
  }

  return data;
};

export const setConfigToCWD = (config: object) => {
  const dir = getConfigPathMOD();
  const prevConfig = getConfigFileOrCreate(dir);

  try {
    fs.writeFileSync(
      dir,
      JSON.stringify({ ...prevConfig, ...config }, null, 2)
    );
  } catch (e) {
    throw new Error("Cannot set config");
  }
};
