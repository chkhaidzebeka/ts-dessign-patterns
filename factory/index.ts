type OS = "ios" | "android";
interface BaseButton {
  text?: string | null | undefined;
}

class IOSButton implements BaseButton {
  constructor() {
    console.log("[IOSButton] Created");
  }
}

class AndroidButton implements BaseButton {
  constructor() {
    console.log("[AndroidButton] Created");
  }
}

class ButtonFactory {
  static createButton(os: OS): IOSButton | AndroidButton | undefined {
    if (os === "android") return new AndroidButton();
    if (os === "ios") return new IOSButton();
  }
}

const button = ButtonFactory.createButton("android");