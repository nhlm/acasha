

var nameSymbol = Symbol('name');
var settingsSymbol = Symbol('settings');

class AcashaComponent {
  constructor(name, settings) {
    this[nameSymbol] = name;
    this[settingsSymbol] = settings;
  }
}

export { AcashaComponent };
