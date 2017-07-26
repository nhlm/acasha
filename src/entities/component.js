var ComponentNameSymbol = Symbol('name');
var ComponentSettingsSymbol = Symbol('settings');

class Component {
  constructor(name, settings) {
    this[ComponentNameSymbol] = name;
    this[ComponentSettingsSymbol] = settings || {};
  }
}

export { Component };
