

class Extension {
  constructor() {
    this.loaded = false;
  }

  get name() {
    return undefined;
  }

  get dependencies() {
    return [];
  }

  get settings() {
    return {};
  }

  get factories() {
    return {};
  }

  get globals() {
    return [];
  }

  get autoDiscover() {
    return true;
  }
}

export { Extension };
