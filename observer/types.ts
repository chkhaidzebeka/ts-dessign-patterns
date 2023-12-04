export interface Observer {
  update(newData: unknown): void;
}

export interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}
