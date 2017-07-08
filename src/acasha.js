import { Scope, AcashaScope, AcashaElementScope } from './core/scope';
import { AcashaExtensionRepository } from './core/extension';
import DOMExtension from './core/extensions/dom';

var extensions = new AcashaExtensionRepository();

extensions.attach(DOMExtension.create());

function query(selector, context) {
  if ( ! ( extensions.isBooted ) ) {
    extensions.boot();
  }

  return Scope(selector, context);
}

query.extensions = extensions;
query.classes = {
  node: AcashaElementScope,
  nodeList: AcashaScope,
};

window.$ = query;
