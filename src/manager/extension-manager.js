import { Extension } from '../entities/extension';

var extensionsSymbol = Symbol('extensions');
var extensibleObjectsSymbol = Symbol('extensible-objects');
var globalsSymbol = Symbol('globals');

/**
 * Extension Manager Class
 *
 * Orchestrates extensions and its loading process.
 */
class ExtensionManager {

  /**
   * Constructor
   *
   * @param object extensions
   */
  constructor(globals, extensions) {
    this[globalsSymbol] = globals;
    this[extensionsSymbol] = {};
    this[extensibleObjectsSymbol] = {
      acasha: globals.acasha,
    };

    var manager = this;

    if ( Array.isArray(extensions) ) {
      extensions.forEach(function(extension) {
        manager.register(extension);
      });
    }
    else {
      console.warn('Extension Manager: Provided extensions parameter is not an Array');
    }
  }

  /**
   * registers an extension to the manager, automatically discovers the
   * extension as long as the autoExtension flag is set to true.
   *
   * @param Extension item
   */
  register(item) {
    if ( ! ( item.prototype instanceof Extension ) ) {
      throw 'Extension Error: Only Extensions can be registered';
    }

    var extension = new item(this);

    if ( typeof extension.name !== 'string' ) {
      throw 'Extension Error: Extension to register must serve a name';
    }

    if ( typeof extension.name.length === 0 ) {
      throw 'Extension Error: Extension name can not be empty';
    }

    if ( extension.name in this[extensionsSymbol] ) {
      throw 'Extension Error: Extension name does already exists';
    }

    this[extensionsSymbol][extension.name] = {
      class: item,
      extension: extension,
      booted: false,
      autoDiscover: extension.autoDiscover,
    };

    if ( extension.autoDiscover ) {
      this.discover(extension.name);
    }
  }

  /**
   * discovers a registered extension.
   *
   * @param string extension
   */
  discover(extension) {
    if ( ! ( extension in this[extensionsSymbol] ) ) {
      console.warn('Extension Manager: Unknown extension: ' + extension);
      return false;
    }

    var meta = this[extensionsSymbol][extension];

    if ( ! ( Array.isArray(meta.extension.dependencies) ) ) {
      throw 'Extensions Error: dependencies must be served as an array of extension names';
    }

    var manager = this;
    var dependenciesMet = 0;

    meta.extension.dependencies.forEach(function(extension) {
      if ( typeof extension !== 'string' ) {
        throw 'Extension Error: A dependency must be given as a string based name';
      }

      if ( manager.discover(extension) ) {
        dependenciesMet++;
      }
    });

    if ( dependenciesMet < meta.extension.dependencies.length ) {
      throw 'Extension Error: Can not resolve ' + ( meta.extension.dependencies.length - dependenciesMet ) +
            ' dependencies required for ' + extension
      ;
    }

    meta.extension.factorize(this[extensibleObjectsSymbol]);
    this.globalize(meta.extension);

    meta.booted = true;

    return true;
  }

  /**
   * globalizes the global exports of an extension.
   */
  globalize(extension) {
    if ( ! ( extension instanceof Extension ) ) {
      throw 'Extension Error: globalize parameter must be instance of Extension';
    }

    var items = extension.globals(this[extensibleObjectsSymbol]);

    for ( var key in items ) {
      this[globalsSymbol][key] = items[key];
    }
  }

  get names() {
    var names = [];
    
    for ( var name in this[extensionsSymbol] ) {
      if ( this[extensionsSymbol].booted ) {
        names.push(name);
      }
    }

    return names;
  }

}

export { ExtensionManager };
