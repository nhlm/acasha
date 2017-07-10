import { Extension } from '../../modularity/extension';

export default class DOMSelect extends Extension {
  get name() {
    return 'acasha/dom-selection';
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
    listScope.prototype.first = function(selector) {

    };

    listScope.prototype.last = function(selector) {

    };

    listScope.prototype.next = function(selector) {

    };

    listScope.prototype.prev = function(selector) {

    };

    listScope.prototype.find = function(selector) {

    };
  }
}
