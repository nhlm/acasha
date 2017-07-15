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
    jQuery.fn.component = function(name) {

    };

    objects.jQuery = jQuery;
  }

}

export { jQueryExtension };
