import { Extension } from '../../modularity/extension';
import {
  AcashaComponentRepository,
  AcashaComponentFactory,
  AcashaComponentWrapper
} from '../repositories/component-repository';
import { AcashaComponent } from '../scopes';

export default class RegistryObjects extends Extension {
  get name() {
    return 'acasha/objects';
  }

  get autoDiscover() {
    return false;
  }

  get settings() {
    return {
      factory: {

      }
    }
  }

  get factories() {
    return {
      acashaRepository: function(obj, factories, repository) {
        return new AcashaComponentRepository();
      },
      acashaComponentFactory: function(obj, factories, repository) {
        return AcashaComponentFactory;
      },
      acashaComponentWrapper: function(obj, factories, repository) {
        return AcashaComponentWrapper;
      },
      acashaComponentFactoryObjectFactory: function(obj, factories, repository) {
        return function(name) {
          return new AcashaComponentFactory(name, factories.acashaRepository);
        };
      },
      acashaComponentWrapperObjectFactory: function(obj, factories, repository) {
        return function(name, component) {
          return new AcashaComponentWrapper(name, component);
        };
      },
      acashaComponentObjectFactory: function(obj, factories, repository) {
        return function(settings) {
          return new AcashaComponent(settings);
        };
      },
    };
  }
}
