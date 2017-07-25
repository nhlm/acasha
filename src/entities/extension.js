import { LogManager } from '../manager/log-manager';

var managerSymbol = Symbol('manager');
var loggerSymbol = Symbol('logger');

/**
 * Extension Class
 *
 * represents a extension definition.
 */
class Extension {

  /**
   * Constructor
   *
   * @param LogManager logger
   */
  constructor(logger) {
    if ( ! ( logger instanceof LogManager ) ) {
      throw 'Extension Error: Provided logger must be instanceof LogManager';
    }

    this[loggerSymbol] = logger;
  }

  /**
   * getter for extension name property
   *
   * @return string
   */
  get name() {
    return undefined;
  }

  /**
   * getter for dependencies property
   *
   * @return Array
   */
  get dependencies() {
    return [];
  }

  /**
   * returns globals export from the managed objects.
   *
   * @return object
   */
  globals(objects) {
    return {};
  }

  /**
   * factory for object modifications.
   */
  factorize(objects) {

  }

  /**
   * getter for auto-discover flag for this extension.
   *
   * @return boolean
   */
  get autoDiscover() {
    return true;
  }

  /**
   * extends a class definition (prototype) of a provided object by the
   * contents of a provided extensions object.
   *
   * @param object object
   * @param object extensions
   */
  extendClass(object, extensions) {
    if ( typeof object !== 'object' ) {
      throw 'Extension Error: object parameter must be an object';
    }

    if ( typeof extensions !== 'object' ) {
      throw 'Extension Error: extensions parameter must be an object';
    }

    for ( var current in extensions ) {
      object.prototype[current] = extensions[current];
    }
  }

  extendObject(object, extensions) {
    if ( typeof object !== 'object' ) {
      throw 'Extension Error: object parameter must be an object';
    }

    if ( typeof extensions !== 'object' ) {
      throw 'Extension Error: extensions parameter must be an object';
    }

    for ( var current in extensions ) {
      object[current] = extensions[current];
    }
  }

  get log() {
    return this[loggerSymbol];
  }

}

export { Extension };
