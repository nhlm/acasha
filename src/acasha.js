import { ExtensionManager } from './manager/extension-manager';

import { jQueryExtension } from './extensions/jquery';

window.acasha = function Acasha(name) {

};

window.acasha.extensions = new ExtensionManager(
  window,
  [
    jQueryExtension,
  ]
);
