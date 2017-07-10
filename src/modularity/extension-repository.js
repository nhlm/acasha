import { Extension } from './extension';

var extensions = Symbol('extensions');
var booted = Symbol('booted');
var objects = Symbol('objects');

class ExtensionRepository {
  constructor() {
    this[extensions] = {};
    this[booted] = false;
    this[objects] = {};
  }

  attach(extension) {
    if ( this[booted] ) {
      throw 'Acasha Extension Error: Can not attach extensions to a booted environment';
    }

    if ( ! ( extension instanceof Extension) ) {
      console.warn('Only Extension instances are attachable to this repository');
      console.log(extension);
    }
    else {
      if ( extension.name === undefined ) {
        throw 'Acasha Extension Error: extension name not defined';
      }

      if ( extension.name in this[extensions] ) {
        throw 'Acasha Extension Error: extension name already known';
      }

      this[extensions][extension.name] = extension;
    }
  }

  publish() {
    for ( var extension in this[extensions] ) {
      if ( this[extensions][extension].autoDiscover === true ) {
        this.publishExtension(extension);
      }
    }

    this[booted] = true;

    return this;
  }

  publishExtension(extension) {
    if ( ! ( extension in this[extensions] ) ) {
      console.warn('Could not load extension "' + extension + '"');
    }
    else if ( this[extensions][extension].loaded === false ) {
      var repository = this;
      var dependenciesMet = 0;
      this[extensions][extension].dependencies.forEach(function(name) {
        if ( repository.publishExtension(name) ) {
          dependenciesMet++;
        }
      });

      if ( this[extensions][extension].dependencies.length > dependenciesMet ) {
        throw 'Acasha Extension Error: Unable to resolve all dependencies for: ' +
          this[extensions][extension].name
        ;
      }

      for ( var factory in this[extensions][extension].factories ) {
        if ( typeof this[extensions][extension].factories[factory] !== 'function' ) {
          throw 'Acasha Extension Error: Factory "' + extension + '@' + factory + '" must be a function';
        }

        this[objects][factory] = this[extensions][extension].factories[factory].call(
          this[extensions][extension],
          this[objects][factory] || undefined,
          this[objects],
          this
        );
      }

      this[extensions][extension].loaded = true;

      return true;
    }

    return false;
  }

  extend(global) {
    var extensionsObjects = this[objects];

    for ( var extension in this[extensions] ) {
      if ( this[extensions][extension].loaded ) {
        this[extensions][extension].globals.forEach(function(name) {
          if ( ! ( name in extensionsObjects ) ) {
            console.warn('Failed to export object "' + name + '" to global scope');
          }
          else {
            global[name] = extensionsObjects[name];
          }
        });
      }
    }
  }

  get extensions() {
    return Object.keys(this[extensions]);
  }
}

export { ExtensionRepository };
