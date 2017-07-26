import { Extension } from '../entities/extension';
import { Component } from '../entities/component';
import { AcashaHub } from '../entities/hub';

class ComponentExtension extends Extension {

  get name() {
    return 'acasha/component';
  }

  get dependencies() {
    return [
      'acasha/hub',
      'acasha/jquery',
    ];
  }

  factorize(objects) {
    var extension = this;

    objects.component = Component;

    objects.hub.prototype.component = function(settings) {
      if ( typeof settings !== 'object' ) {
        extension.log.warn('Component settings must be an object');
      }

      var instance = new objects.component(this.name, settings || {});

      if ( instance.autoDiscover === true ) {
        instance.discover();
      }

      return objects.acasha.repositories.components[this.name] = instance;
    };

    objects.component.prototype.autoDiscover = false;

    objects.component.prototype.bind = function(selector, context) {
      if ( ! ( selector instanceof objects.jQuery.fn.init ) ) {
        selector = jQuery(selector, context);
      }

      var component = this;

      selector.each(function() {
        extension.log.debug('Acasha established on ', this);
        this.acasha = {
          component: component,
          timer: [],
          data: {},
        };
      });
    };

    objects.component.prototype.discover = function() {
      objects.jQuery("[data-component='" + this.name + "']");
    };

    this.log.debug(
      'Extension [' + extension.name + ']: Component Handler installed.'
    );
  }

}

export { ComponentExtension };
