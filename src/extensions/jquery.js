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
