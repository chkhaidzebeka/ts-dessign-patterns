import type { LooseAutocomplete } from "../utils";

interface IConstructor {
  host: LooseAutocomplete<"localhost">;
  username: string;
  password: string;
}

class DbConnector {
  private static INSTANCE: DbConnector;

  private constructor({ host, username, password }: IConstructor) {
    console.log(`connecting to ${username}:${password}@${host}`);
  }

  static getInstance() {
    if (!this.INSTANCE) {
      this.INSTANCE = new DbConnector({
        host: "localhost",
        username: "test",
        password: "test",
      });
    }

    return this.INSTANCE;
  }
}

DbConnector.getInstance();
DbConnector.getInstance();
DbConnector.getInstance();
