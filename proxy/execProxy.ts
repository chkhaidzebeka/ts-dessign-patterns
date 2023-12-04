import { exec, ExecException } from "child_process";

export class ExecProxy {
  private static _allowedCommands = ["ls", "pwd"];

  static exec(
    command: string,
    callback: (
      error: ExecException | null,
      stdout: string,
      stderr: string
    ) => void
  ) {
    if (!this._allowedCommands.includes(command)) {
      const error = new Error(
        `Command not allowed: ${command}`
      ) as ExecException;
      callback(error, "", error.message);
      return;
    }

    exec(command, callback);
  }
}
