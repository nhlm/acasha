import { Extension } from '../../modularity/extension';

export default class DocumentObjectModel extends Extension {
  get name() {
    return 'acasha/dom';
  }

  get dependencies() {
    return [
      'acasha/dom-objects',
    ];
  }

  get factories() {
    return {
      $: function($, factories) {
        return function(selector, context) {
          return factories.listScope(selector, context);
        }
      },
    };
  }

  get globals() {
    return [
      '$',
    ];
  }
}
