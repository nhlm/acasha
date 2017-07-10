import { Extension } from '../../modularity/extension';

export default class Acasha extends Extension {
  get name() {
    return 'acasha/acasha';
  }

  get factories() {
    return {
      acasha: function(obj, factories, repository) {
        function acasha() {

        }

        acasha.extensions = repository.extensions;

        return acasha;
      }
    }
  }

  get globals() {
    return [
      'acasha',
    ];
  }
}
