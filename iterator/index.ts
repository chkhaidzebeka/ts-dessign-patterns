import { IBaseIterator, IFileSystem } from "./types";

class DirectoryIterator implements IBaseIterator {
  private files: string[];
  private index: number = 0;

  constructor(files: string[]) {
    this.files = files;
  }

  hasNext(): boolean {
    return this.index < this.files.length;
  }

  next(): string {
    if (this.hasNext()) {
      return this.files[this.index++];
    }
    throw new Error("No more files");
  }
}

class Directory implements IFileSystem {
  private files: string[] = [];

  addItem(path: string): this {
    this.files.push(path);
    return this;
  }

  createIterator(): IBaseIterator {
    return new DirectoryIterator(this.files);
  }
}

const rootDirectory = new Directory();
rootDirectory.addItem("file1.txt");
rootDirectory.addItem("file2.txt");
rootDirectory.addItem("file3.txt");

const iterator = rootDirectory.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
