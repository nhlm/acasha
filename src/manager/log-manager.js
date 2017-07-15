var logSymbol = Symbol('log');
var warnSymbol = Symbol('warn');
var debugSymbol = Symbol('debug');

class LogManager {
  constructor(settings) {
    this[logSymbol] = [];
    this[warnSymbol] = [];
    this[debugSymbol] = [];

    this.settings = settings || {
      log: true,
      debug: false,
      warn: true,
    };
  }

  register(object) {
    if ( 'log' in object && typeof object.log === 'function' ) {
      this[logSymbol].push(object.log);
    }

    if ( 'warn' in object && typeof object.warn === 'function' ) {
      this[warnSymbol].push(object.warn);
    }

    if ( 'debug' in object && typeof object.debug === 'function' ) {
      this[debugSymbol].push(object.debug);
    }
  }

  log(... contents) {
    if ( this.settings.log === true ) {
      this[logSymbol].forEach(function(callback) {
        callback.call(undefined, ... contents);
      });
    }
  }

  warn(... contents) {
    if ( this.settings.warn === true ) {
      this[warnSymbol].forEach(function(callback) {
        callback.call(undefined, ... contents);
      });
    }
  }

  debug(... contents) {
    if ( this.settings.debug === true ) {
      this[debugSymbol].forEach(function(callback) {
        callback.call(undefined, ... contents);
      });
    }
  }
}

export { LogManager };
