import { Extension } from '../../modularity/extension';
import { AcashaListScope, AcashaElementScope } from '../scopes';

export default class DOMObjects extends Extension {

  get name() {
    return 'acasha/dom-objects';
  }

  get factories() {
    return {
      listScopeFactory: function() {
        return function(selector, context) {
          if ( typeof context === 'undefined' ) {
            context = document;
          }

          if ( ! ( context === document || context instanceof HTMLElement ) ) {
            throw 'Acasha Context Error: Unknown context';
          }

          return new AcashaListScope(document.querySelectorAll(selector, context), selector, context);
        };
      },
      listScope: function() {
        return AcashaListScope;
      },
      elementScopeFactory: function() {
        return function(element) {
          if ( ! ( element instanceof HTMLElement ) ) {
            throw 'Acasha Scope Error: Only HTMLElements are suitable for scope creation';
          }

          return new AcashaElementScope(element);
        }
      },
      elementScope: function() {
        return AcashaElementScope;
      }
    }
  }

  get autoDiscover() {
    return false;
  }
}
