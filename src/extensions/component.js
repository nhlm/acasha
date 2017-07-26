import { Extension } from '../entities/extension';
import { Component } from '../entities/component';
import { AcashaHub } from '../entities/hub';

class ComponentExtension extends Extension {

  get name() {
    return 'acasha/component';
  }

  get dependencies() {
    return [
      'acasha/hub'
    ];
  }

  factorize(objects) {
    var extension = this;

    objects.hub.prototype.component = function(settings) {
      if ( typeof settings !== 'object' ) {
        extension.log.warn('Component settings must be an object');
      }

      return objects.acasha.repositories.components[this.name] = new Component(settings || {});
    };

    this.log.debug(
      'Extension [' + extension.name + ']: Component Handler installed.'
    );
  }

}

export { ComponentExtension };
