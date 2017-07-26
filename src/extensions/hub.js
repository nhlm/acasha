import { Extension } from '../entities/extension';
import { Component } from '../entities/component';
import { AcashaHub } from '../entities/hub';

class HubExtension extends Extension {

  get name() {
    return 'acasha/hub';
  }

  get autoDiscover() {
    return false;
  }

  factorize(objects) {
    var extension = this;

    objects.acasha.factory = function(name) {
      return new AcashaHub(name);
    };

    objects.acasha.repositories = objects.acasha.repositories || {};

    objects.acasha.repositories.components = {};

    objects.hub = AcashaHub;

    this.log.debug(
      'Extension [' + extension.name + ']: Hub installed.'
    );
  }

}

export { HubExtension };
