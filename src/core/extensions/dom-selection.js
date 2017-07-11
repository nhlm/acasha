import { Extension } from '../../modularity/extension';

export default class DOMSelect extends Extension {
  get name() {
    return 'acasha/dom-selection';
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
      elementScope: function(elementScope, factories) {
        this.applyElementScopeExtensions(elementScope, factories);
      }
    };
  }

  applyListScopeExtensions(listScope, factories) {
    listScope.prototype.first = function(selector) {
      if ( this.list.length === 0 ) {
        return undefined;
      }

      var element = this.list.item(0);

      if ( typeof selector === 'string' && ! ( element.matches(selector) ) ) {
        var current = factories.elementScopeFactory(element);
        return current.next(selector);
      }

      return this.elementScopeFactory(element);
    };

    listScope.prototype.last = function(selector) {
      if ( this.list.length === 0 ) {
        return undefined;
      }

      var element = this.list.item(this.list.length - 1);

      if ( typeof selector === 'string' && ! ( element.matches(selector) ) ) {
        var current = factories.elementScopeFactory(element);
        return current.prev(selector);
      }

      return this.elementScopeFactory(element);
    };

    listScope.prototype.next = function(selector) {
      return this.first(selector);
    };

    listScope.prototype.prev = function(selector) {
      return this.last(selector);
    };

    listScope.prototype.find = function(selector) {
      for ( var i in this.list ) {
        var matches = this.list.item(i).querySelectorAll(selector);

        if ( matches.length > 0 ) {
          return factories.listScopeFactory(matches, selector, this.list.item(i));
        }
      }

      return undefined;
    };

    listScope.prototype.contains = function(selector) {
      for ( var i in this.list ) {
        var matches = this.list.item(i).matches(selector);

        if ( matches === true ) {
          return true;
        }
      }

      return false;
    };

    listScope.prototype.even = function(selector) {
      return typeof selector === 'string'
        ? this.factories.listScopeFactory(
            this.context.querySelectorAll(this.selector + selector + ':nth-child(even)'),
            this.selector + selector + ':nth-child(even)',
            this.context
          )
        : this.factories.listScopeFactory(
            this.context.querySelectorAll(this.selector + ':nth-child(even)'),
            this.selector + ':nth-child(even)',
            this.context
        )
      ;
    }

    listScope.prototype.odd = function(selector) {
      return typeof selector === 'string'
        ? this.factories.listScopeFactory(
            this.context.querySelectorAll(this.selector + selector + ':nth-child(odd)'),
            this.selector + selector + ':nth-child(odd)',
            this.context
          )
        : this.factories.listScopeFactory(
            this.context.querySelectorAll(this.selector + ':nth-child(odd)'),
            this.selector + ':nth-child(odd)',
            this.context
        )
      ;
    }
  }

  applyElementScopeExtensions(elementScope, factories) {
    elementScope.prototype.next = function(selector) {
      if ( ! ( this.element.nextSibling ) ) {
        return undefined;
      }

      if ( typeof selector === 'undefined' ) {
        return factories.elementScopeFactory(this.element.nextSibling);
      }

      var element = this.element;
      var matched = false;

      while ( element = element.nextSibling && matched === false ) {
        if ( element.matches(selector) ) {
          matched = true;
        }
      }

      return factories.elementScopeFactory(element);
    };

    elementScope.prototype.prev = function(selector) {
      if ( ! ( this.element.previousSibling ) ) {
        return undefined;
      }

      if ( typeof selector === 'undefined' ) {
        return factories.elementScopeFactory(this.element.previousSibling);
      }

      var element = this.element;
      var matched = false;

      while ( element = element.previousSibling && matched === false ) {
        if ( element.matches(selector) ) {
          matched = true;
        }
      }

      return factories.elementScopeFactory(element);
    };

    elementScope.prototype.find = function(selector) {
      return factories.listScopeFactory(this.element.querySelectorAll(selector), selector, this.element);
    };

    elementScope.prototype.children = function() {
      return factories.listScopeFactory(this.element.children, '*', this.element);
    };

    elementScope.prototype.contains = function(selector) {
      return this.children().contains(selector);
    };

    elementScope.prototype.is = function(selector) {
      return this.element.matches(selector);
    };
  }
}
