class AcashaScope {

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
}

export { AcashaScope, AcashaListScope };
