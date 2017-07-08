import { AcashaScope, AcashaElementScope, BlockedMethods } from './scope';

var nameSymbol = Symbol('name');
var authorSymbol = Symbol('author');
var dependenciesSymbol = Symbol('dependencies');
var domNodeMethodsSymbol = Symbol('dom-node-methods');
var domNodeListMethodsSymbol = Symbol('dom-node-list-methods');

class AcashaExtension {
  constructor(settings) {
    settings = settings || {};
    this[nameSymbol] = undefined;
    this[authorSymbol] = 'Acasha Community';
    this[dependenciesSymbol] = [];
    this[domNodeMethodsSymbol] = {};
    this[domNodeListMethodsSymbol] = {};

    if ( typeof this.init === 'function' ) {
      settings = this.init(settings);
    }

    if ( typeof settings.name === 'string' ) {
      this[nameSymbol] = settings.name;
    }

    if ( typeof settings.author === 'string' ) {
      this[authorSymbol] = settings.author;
    }

    if ( Array.isArray(settings.dependencies) ) {
      settings.dependencies.forEach(function(item) {
        if ( typeof item === 'string' ) {
          this[dependenciesSymbol].push(item);
        }
      });
    }

    if ( typeof settings.dom === 'object' ) {
      if ( typeof settings.dom.node === 'object' && Object.keys(settings.dom.node).length > 0 ) {
        for ( var method in settings.dom.node ) {
          if ( typeof settings.dom.node[method] === 'function' ) {
            this[domNodeMethodsSymbol][method] = settings.dom.node[method];
          }
        }
      }

      if ( typeof settings.dom.nodeList === 'object' && Object.keys(settings.dom.nodeList).length > 0 ) {
        for ( var method in settings.dom.nodeList ) {
          if ( typeof settings.dom.nodeList[method] === 'function' ) {
            this[domNodeListMethodsSymbol][method] = settings.dom.nodeList[method];
          }
        }
      }
    }
  }

  init(settings) {
    return settings;
  }

  get name() {
    return this[nameSymbol];
  }

  set name(value) {
    throw 'Acasha Extension Error: You can not modify this property: name';
  }

  get author() {
    return this[authorSymbol];
  }

  set author(value) {
    throw 'Acasha Extension Error: You can not modify this property: author';
  }

  enable(extensions, targets) {
    if ( ! ( extensions instanceof AcashaExtensionRepository ) ) {
      return false;
    }

    var dependenciesMet = 0;

    this[dependenciesSymbol].forEach(function(item) {
      if ( extensions.extension(item) ) {
        dependenciesMet++;
      }
      else {
        if ( true === extensions.enable(item) ) {
          dependenciesMet++;
        }
      }
    });

    if ( dependenciesMet < this[dependenciesSymbol].length ) {
      console.warn('Unable to resolve all dependencies for extension: ' + this[nameSymbol]);
      return false;
    }

    if ( this.doesExtendNode() ) {
      for ( var method in this[domNodeMethodsSymbol] ) {
        var finder = function(item) {
          return item === method;
        };

        if ( BlockedMethods.AcashaScope.find(finder) ) {
          throw 'Acasha Interception Error: Can not overwrite blocked method: ' + method;
        }
        else {
          targets.node.prototype[method] = this[domNodeMethodsSymbol][method];
        }
      }
    }

    if ( this.doesExtendNodeList() ) {
      for ( var method in this[domNodeListMethodsSymbol] ) {
        var finder = function(item) {
          return item === method;
        };

        if ( BlockedMethods.AcashaElementScope.find(finder) ) {
          throw 'Acasha Interception Error: Can not overwrite blocked method: ' + method;
        }
        else {
          targets.nodeList.prototype[method] = this[domNodeListMethodsSymbol][method];
        }
      }
    }

    return true;
  }

  doesExtendNode() {
    return Object.keys(this[domNodeMethodsSymbol]).length > 0;
  }

  doesExtendNodeList() {
    return Object.keys(this[domNodeListMethodsSymbol]).length > 0;
  }

  register(repository) {
    if ( repository instanceof AcashaExtensionRepository ) {
      repository.attach(this);
    }
  }

  static create(settings) {
    return new this(settings);
  }
}

var extensionsSymbol = Symbol('extensions');
var enabledExtensionsSymbol = Symbol('extensions-enabled');
var extensionTargetsSymbol = Symbol('extension-targets');
var bootStateSymbol = Symbol('boot-state');

class AcashaExtensionRepository {
  constructor() {
    this[extensionsSymbol] = {};
    this[enabledExtensionsSymbol] = [];
    this[extensionTargetsSymbol] = {
      node: AcashaElementScope,
      nodeList: AcashaScope
    };
    this[bootStateSymbol] = false;
  }

  attach(extension) {
    if ( extension instanceof AcashaExtension && ! ( extension.name in this[extensionsSymbol] ) ) {
      this[extensionsSymbol][extension.name] = extension;
    }

    return this;
  }

  enable(name) {
    if ( name in this[extensionsSymbol] ) {
      if ( this[extensionsSymbol][name].enable(this, this[extensionTargetsSymbol]) ) {
        this[enabledExtensionsSymbol].push(this[extensionsSymbol][name].name);
        return true;
      }
    }

    return false;
  }

  boot() {
    for ( var extension in this.extensions ) {
      this.enable(extension);
    }

    this[bootStateSymbol] = true;
  }

  extension(name) {
    var isEnabledFinder = function(item) {
      return item === name;
    };

    if ( name in this[extensionsSymbol] && this[enabledExtensionsSymbol.find(isEnabledFinder)] !== undefined ) {
      return this[extensionSymbol][name];
    }

    return undefined;
  }

  get extensions() {
    return this[extensionsSymbol];
  }

  get isBooted() {
    return this[bootStateSymbol];
  }
}

export { AcashaExtension, AcashaExtensionRepository };
