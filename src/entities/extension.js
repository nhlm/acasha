var managerSymbol = Symbol('manager');

/**
 * Extension Class
 *
 * represents a extension definition.
 */
class Extension {

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
}

export { Extension };
