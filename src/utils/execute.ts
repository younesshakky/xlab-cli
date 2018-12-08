import { exec } from "child_process";

export default function execute(command: string) {
  return new Promise((resolve, reject) => {
    exec(command, (err: any, stdout: string, stderr: any) => {
      if (err || stderr) reject(err);
      else resolve(stdout.trim());
    });
  });
}
