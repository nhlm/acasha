import { ExtensionRepository } from './modularity/extension-repository';
import { CoreExtensions } from './core/extensions';

var extensions = new ExtensionRepository();

CoreExtensions.forEach(function(extension, nth) {
  extensions.attach(new extension);
});

// objects elevation
var global = window || {};

extensions.publish().extend(global);

export { global };
