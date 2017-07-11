import { Extension } from '../../modularity/extension';

export default class Binding extends Extension {
  get name() {
    return 'acasha/binding';
  }

  get dependencies() {
    return [
      'acasha/jquery',
      'acasha/objects',
    ];
  }

  get autoDiscover() {
    return false;
  }

  get factories() {
    return {
      acashaPrototype: function() {
        return {
          acasha: {
            component: null,
            virtual: null,
          },
        };
      },
      acashaComponentWrapper: function(wrapper, factories) {
        wrapper.prototype.bind = function(selector, context) {
          var wrapper = this;
          factories.jQuery(selector, context).each(function(index, element) {
            if ( typeof element.acasha === 'undefined' ) {
              element.acasha = factories.jQuery.extend({}, factories.acashaPrototype.acasha);
            }

            console.log(
              factories.acashaRepository.factorize(wrapper.componentName),
              factories.acashaRepository.factorize(wrapper.componentName).wrappedComponent
            );

            element.acasha.component = factories.acashaRepository.factorize(wrapper.componentName).wrappedComponent;
          });

          return this;
        };
      },
    };
  }
}
