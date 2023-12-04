import { Observer, Subject } from "./types";

export class WeatherStation implements Subject {
  private _observers: Observer[] = [];
  private temperature: number;

  addObserver(observer: Observer): void {
    this._observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this._observers.indexOf(observer);
    if (index === -1) return;
    this._observers.splice(index, 1);
  }

  notifyObservers(): void {
    this._observers.forEach((observer) => {
      observer.update(this.temperature);
    });
  }

  setTemperature(temperature: typeof this.temperature): void {
    this.temperature = temperature;
    this.notifyObservers();
  }
}
