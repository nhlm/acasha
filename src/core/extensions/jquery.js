import { Extension } from '../../modularity/extension';
import jQuery from 'jquery';

export default class jQueryExtension extends Extension {
  get name() {
    return 'acasha/jquery';
  }

  get factories() {
    return {
      $: function() {
        return jQuery;
      },
      jQuery: function() {
        return jQuery;
      },
    };
  }
}
