import { IUser } from "./types";

export class Person {
  private _params: IUser = {} as IUser;

  constructor(builder: IUser) {
    this._params = builder;
  }
}
