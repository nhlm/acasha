import { AcashaExtension } from '../extension.js';
import { Scope, AcashaElementScope } from '../scope.js';

export default class DocumentObjectModel extends AcashaExtension {
  init() {
    return {
      name: 'acasha/dom',
      author: 'nihylum',
      dom: {
        node: {
          parent: function() {
            return new AcashaElementScope(this.raw().parentNode);
          },
          remove: function() {
            this.parent().raw().removeChild(this.raw());

            return undefined;
          },
          children: function() {
            return new AcashaScope(this.raw().childNodes, '> *', this.raw());
          },
          after: function(variant) {

          },
          before: function(variant) {

          },
          html: function(variant) {
            if ( typeof variant === 'string' ) {
              this.raw().innerHTML = variant;
            }

            return this;
          }
        },
        nodeList: {
          first: function(selector) {
            if ( typeof selector === 'undefined' ) {
              return new AcashaElementScope(this.list.item(0));
            }

            return this.find(selector).first();
          },
          last: function() {
            if ( typeof selector === 'undefined' ) {
              return new AcashaElementScope(this.list.item(this.list.length - 1));
            }

            return this.find(selector).first();
          },
          each: function(callback) {
            if ( typeof callback !== 'function' ) {
              throw 'Acasha Iteration Error: Can not iterate without a handler callback';
            }

            this.list.forEach(function(item) {
              callback.call(new AcashaElementScope(item));
            });

            return this;
          },
          parent: function() {
            return this.first().parent();
          },
          find: function(selector) {
            return Scope(this.selector + ' ' + selector, this.context);
          },
          remove: function(selector) {
            if ( typeof selector === 'undefined' ) {
              this.each(function() {
                this.remove();
              });

              return undefined;
            }

            return this.find(selector).remove();
          },
          html: function(variant) {
            this.each(function() {
              this.html(variant);
            });

            return this;
          }
        }
      }
    }
  }
}
