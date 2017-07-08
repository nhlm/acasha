import { ensureNodeList, ensureElement } from './tools';

function Scope(selector, context) {
  context = context || document;
  nodes = selector || [];

  if ( typeof selector === 'string' ) {
    var nodes = context.querySelectorAll(selector);
  }

  return new AcashaScope(nodes, selector, context);
}

var traversableSymbol = Symbol('traversable');
var selectorSymbol = Symbol('selector');
var contextSymbol = Symbol('context');

class AcashaScope {
  constructor(traversable, selector, context) {
    if ( context instanceof AcashaElementScope ) {
      context = context.raw();
    }

    this[traversableSymbol] = ensureNodeList(traversable);
    this[selectorSymbol] = selector;
    this[contextSymbol] = context;
  }

  get selector() {
    return this[selectorSymbol];
  }

  set selector(value) {
    throw 'Acasha Error: You can not modify this';
  }

  get context() {
    return this[contextSymbol];
  }

  set context(value) {
    throw 'Acasha Error: You can not modify this';
  }

  get list() {
    return this[traversableSymbol];
  }

  set list(value) {
    throw 'Acasha Error: You can not modify this';
  }
}

var elementSymbol = Symbol('element');

class AcashaElementScope {
  constructor(element) {
    this[elementSymbol] = ensureElement(element);
  }

  raw() {
    return this[elementSymbol];
  }
}

var BlockedMethods = {
  AcashaScope: ['constructor', 'selector', 'list', 'context'],
  AcashaElementScope: ['constructor', 'raw'],
};

export { AcashaScope, AcashaElementScope, Scope, BlockedMethods };
