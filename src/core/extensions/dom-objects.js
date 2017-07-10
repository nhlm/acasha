import { Extension } from '../../modularity/extension';
import { AcashaListScope } from '../scopes';

export default class DocumentObjectModelObjects extends Extension {

  get name() {
    return 'acasha/dom-objects';
  }

  get factories() {
    return {
      listScope: function() {
        return function(selector, context) {
          if ( typeof context === 'undefined' ) {
            context = document;
          }

          if ( ! ( context === document || context instanceof HTMLElement ) ) {
            throw 'Acasha Context Error: Unknown context';
          }

          return new AcashaListScope(document.querySelectorAll(selector, context), selector, context);
        };
      }
    }
  }

  get autoDiscover() {
    return false;
  }
}
