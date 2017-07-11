import jQueryExtension from './extensions/jquery';
import Acasha from './extensions/acasha';
import Registry from './extensions/acasha-registry';
import RegistryObjects from './extensions/acasha-objects';
import Binding from './extensions/acasha-binding';


var CoreExtensions = [
  jQueryExtension,
  Acasha,
  Registry,
  RegistryObjects,
  Binding,
];

export { CoreExtensions };
