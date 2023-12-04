export interface IBaseIterator {
  hasNext(): boolean;
  next(): string;
}

export interface IFileSystem {
  createIterator(): IBaseIterator;
  addItem(path: string): this;
}
