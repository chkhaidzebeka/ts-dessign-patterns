import { Observer, Subject } from "./types";

export class Fan implements Observer {
  private _subject: Subject;

  constructor(weatherStation: Subject) {
    this._subject = weatherStation;
    this._subject.addObserver(this);
  }

  update(newData: number): void {
    if (newData > 25) console.log("Turing on...");
    else console.log("Turing off...");
  }
}
