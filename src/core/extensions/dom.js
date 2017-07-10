import { Extension } from '../../modularity/extension';

export default class DOM extends Extension {
  get name() {
    return 'acasha/dom';
  }

  get dependencies() {
    return [
      'acasha/dom-iteration',
      'acasha/dom-selection',
      'acasha/dom-manipulation',
    ];
  }

  get factories() {
    return {
      $: function($, factories) {
        return function(selector, context) {
          return factories.listScopeFactory(selector, context);
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
