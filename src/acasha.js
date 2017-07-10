import { ExtensionRepository } from './modularity/extension-repository';
import { CoreExtensions } from './core/extensions';

var extensions = new ExtensionRepository();

CoreExtensions.forEach(function(extension) {
  extensions.attach(new extension);
});

// objects elevation
var global = window || {};

extensions.publish().extend(global);

console.log(extensions);

export { global };
