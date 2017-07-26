import { Extension } from '../entities/extension';
import jQuery from 'jquery';

class jQueryExtension extends Extension {

  get name() {
    return 'acasha/jquery';
  }

  globals(objects) {
    return {
      $: objects.jQuery
    };
  }

  factorize(objects) {
    var extension = this;
    var extensions = {
      component: function(name) {
        var components = objects.acasha.repositories.components;

        if ( name in components ) {
          components[name].bind(this);
        }
        else {
          extension.log.warn('Unknown component name in jQuery component wrapper: ' + name);
        }

        return this;
      },
    };

    this.extendObject(jQuery.fn, extensions);

    objects.jQuery = jQuery;

    this.log.debug(
      'Extension [' + extension.name + ']: jQuery ' + jQuery.fn.jquery + ' factorized: ' +
      Object.keys(extensions).join(', ')
    );
  }

}

export { jQueryExtension };
