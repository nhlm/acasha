import { Extension } from '../../modularity/extension';

export default class DOMAlter extends Extension {
  get name() {
    return 'acasha/dom-manipulation';
  }

  get dependencies() {
    return [
      'acasha/dom-objects',
    ];
  }

  get autoDiscover() {
    return false;
  }

  get factories() {
    return {
      listScope: function(listScope, factories) {
        this.applyListScopeExtensions(listScope, factories);
      },
    };
  }

  applyListScopeExtensions(listScope, factories) {
    listScope.prototype.remove = function(selector) {

    };

    listScope.prototype.hide = function(selector) {

    };

    listScope.prototype.show = function(selector) {

    };
  }
}
