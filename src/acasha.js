import { ExtensionManager, extensibleObjectsSymbol } from './manager/extension-manager';
import { LogManager } from './manager/log-manager';
import { AcashaHub } from './entities/hub';

// Extensions
import { jQueryExtension } from './extensions/jquery';
import { ComponentExtension } from './extensions/component';
import { HubExtension } from './extensions/hub';

// check for settings

var scriptSettings = {
  log: {}
};

if ( 'currentScript' in document ) {
  scriptSettings.log.debug = JSON.parse(document.currentScript.dataset.debug || 'false');
  scriptSettings.log.warn = JSON.parse(document.currentScript.dataset.warn || 'false');
  scriptSettings.log.log = JSON.parse(document.currentScript.dataset.log || 'false');
}

// implement Logger

var logger = new LogManager({
  log: scriptSettings.log.log || true,
  warn: scriptSettings.log.warn || true,
  debug: scriptSettings.log.debug || false,
});

logger.register({
  log: console.log,
  warn: console.warn,
  debug: console.debug,
});

// construct meta functions

window.acasha = function(name) {
  return window.acasha.factory(name);
};

window.acasha.logger = logger;

// implement Extensions

window.acasha.extensions = new ExtensionManager(
  window.acasha.logger,
  window,
  [
    HubExtension,
    jQueryExtension,
    ComponentExtension,
  ]
);
