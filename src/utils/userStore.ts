import * as fs from "fs-extra";
import * as path from "path";

type conf = {
  accessToken: string;
  projectID: string;
};

const getConfigPath = (dir: string) => {
  return path.join(dir, "config.json");
};

export const getConfig = async (dir: string) => {
  const configPath = getConfigPath(dir);
  let config: conf | object = {};

  try {
    const conf = await fs.readJSON(configPath);
    config = conf;
  } catch (e) {
    // create file if it's not found
    if (e.code == "ENOENT") {
      await fs.writeFile(configPath, JSON.stringify({}));
    }
  }

  return config;
};

export const setConfig = async (dir: string, config: object) => {
  const configPath = getConfigPath(dir);
  console.log("hey fuck face");
  const lastConfig = await getConfig(dir);
  const newConfig = { ...lastConfig, ...config };

  return await fs.writeFile(configPath, JSON.stringify(newConfig));
};
