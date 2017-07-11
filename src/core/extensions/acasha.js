import { Extension } from '../../modularity/extension';

export default class Acasha extends Extension {
  get name() {
    return 'acasha/acasha';
  }

  get dependencies() {
    return [
      'acasha/registry',
      'acasha/binding',
    ];
  }

  get factories() {
    return {
      acasha: function(obj, factories, repository) {
        function acasha(name) {
          return factories.acashaRepository.factorize(name);
        }

        acasha.extensions = repository.extensions;

        return acasha;
      },
    };
  }

  get globals() {
    return [
      'acasha',
    ];
  }
}
