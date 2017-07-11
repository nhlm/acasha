import { Extension } from '../../modularity/extension';

class jQueryExtension extends Extension {
  get name() {
    return 'acasha/jquery-component';
  }

  get dependencies() {
    return [
      'acasha/acasha',
    ];
  }

  get factories() {
    return {
      $: function(jQuery, factories) {
        jQuery.fn.component = function(name) {
          if ( ! ( factories.acashaRepository.has(name) ) ) {
            console.warn('Unknown Acasha Component: ' + name);
          }
          else {
            this.each(function(index, element) {
              factories.acashaRepository.factorize(name).bind(element);
            });
          }

          return jQuery(this);
        };
      }
    };
  }
}

export { jQueryExtension as jQuery };
