import { AcashaComponent } from '../scopes';

var componentsSymbol = Symbol('components');

class AcashaComponentRepository {
  constructor() {
    this[componentsSymbol] = {};
  }

  factorize(name) {
    if ( this.has(name) ) {
      return new AcashaComponentWrapper(name, this[componentsSymbol][name]);
    }

    return new AcashaComponentFactory(name, this);
  }

  has(item) {
    return item in this[componentsSymbol];
  }

  get components() {
    return this[componentsSymbol];
  }
}

var nameSymbol = Symbol('component-name');
var repositorySymbol = Symbol('component-repository');

class AcashaComponentFactory {
  constructor(name, repository) {
    this[nameSymbol] = name;
    this[repositorySymbol] = repository;
  }

  get componentName() {
    return this[nameSymbol];
  }

  get repository() {
    return this[repositorySymbol];
  }

  get components() {
    return this.repository[componentsSymbol];
  }
}

var componentSymbol = Symbol('component');

class AcashaComponentWrapper {
  constructor(name, component) {
    this[nameSymbol] = name;
    this[componentSymbol] = component;
  }

  get componentName() {
    return this[nameSymbol];
  }

  get wrappedComponent() {
    return this[componentSymbol];
  }
}

export { AcashaComponentRepository, AcashaComponentFactory, AcashaComponentWrapper };
