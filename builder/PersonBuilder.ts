import { IUser } from "./types";
import { Person } from "./Person";

export class PersonBuilder {
  private _params: IUser = {} as IUser;

  constructor(name: string) {
    this._params.name = name;
  }

  activate() {
    this._params.isActive = true;
    return this;
  }

  makeAdmin() {
    this._params.isAdmin = true;
    return this;
  }

  build(): Person {
    return new Person(this._params);
  }
}
