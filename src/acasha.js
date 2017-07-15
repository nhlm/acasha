import { ExtensionManager } from './manager/extension-manager';
import { LogManager } from './manager/log-manager';

// Extensions
import { jQueryExtension } from './extensions/jquery';

window.acasha = function Acasha(name) {

};

// implement Logger

window.acasha.logger = new LogManager({
  log: true,
  warn: true,
  debug: true,
});

window.acasha.logger.register({
  log: console.log,
  warn: console.warn,
  debug: console.debug,
});

// implement Extensions

window.acasha.extensions = new ExtensionManager(
  window.acasha.logger,
  window,
  [
    jQueryExtension,
  ]
);
