import { Extension } from '../../modularity/extension';

export default class Registry extends Extension {
  get name() {
    return 'acasha/registry';
  }

  get dependencies() {
    return [
      'acasha/objects',
      'acasha/jquery',
    ];
  }

  get autoDiscover() {
    return false;
  }

  get settings() {
    return {
      factory: {},
    };
  }

  get factories() {
    return {
      acashaComponentFactory: function(componentFactory, factories) {
        this.applyAcashaComponentFactoryExtensions(componentFactory, factories);
      }
    };
  }

  applyAcashaComponentFactoryExtensions(componentFactory, factories) {
    var factorySettings = this.settings.factory;
    componentFactory.prototype.component = function(settings) {
      settings = factories.jQuery.extend({}, factorySettings, settings);
      var component = factories.acashaComponentObjectFactory(this.componentName, settings);
      this.repository.components[this.componentName] = component;
      return factories.acashaComponentWrapperObjectFactory(this.componentName, component);
    }
  }
}
