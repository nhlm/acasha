import { Extension } from '../../modularity/extension';

export default class DOMIterate extends Extension {
  get name() {
    return 'acasha/dom-iteration';
  }

  get dependencies() {
    return [
      'acasha/dom-objects',
    ];
  }

  get factories() {
    return {
      listScope: function(listScope, factories) {
        this.applyListScopeExtensions(listScope, factories);
      }
    }
  }

  get autoDiscover() {
    return false;
  }

  applyListScopeExtensions(listScope, factories) {
    // .each()
    listScope.prototype.each = function(callback) {
      this.list.forEach(function(item) {
        callback.call(factories.elementScopeFactory(item));

        return this;
      });
    }
  }
}
