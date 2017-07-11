import { ExtensionRepository } from './modularity/extension-repository';
import { CoreExtensions } from './core/extensions';
import { Polyfills } from './core/polyfills';

var extensions = new ExtensionRepository();

CoreExtensions.forEach(function(extension, nth) {
  extensions.attach(new extension);
});

// objects elevation
var global = window || {};

extensions.publish().extend(global);

if ( typeof global.acasha === 'undefined' ) {
  global.acasha = {};
  global.acasha.polyfills = Polyfills;
}

export { global };
