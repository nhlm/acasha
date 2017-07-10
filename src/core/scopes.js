var elementSymbol = Symbol('element');

class AcashaElementScope {
  constructor(node) {
    this[elementSymbol] = node;
  }

  get element() {
    return this[elementSymbol];
  }
}

var nodeListSymbol = Symbol('node-list');
var selectorSymbol = Symbol('selector');
var contextSymbol = Symbol('context');

class AcashaListScope {
  constructor(nodeList, selector, context) {
    this[nodeListSymbol] = nodeList;
    this[selectorSymbol] = selector;
    this[contextSymbol] = context;
  }

  get list() {
    return this[nodeListSymbol];
  }

  get selector() {
    return this[selectorSymbol];
  }

  get context() {
    return this[contextSymbol];
  }

  get length() {
    return this.list.length;
  }
}

export { AcashaElementScope, AcashaListScope };
