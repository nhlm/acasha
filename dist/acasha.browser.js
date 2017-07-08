!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic('2', ['3', '4'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toIObject = $__require('3');
  $__require('4')('getOwnPropertyDescriptor', function ($getOwnPropertyDescriptor) {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });
});
$__System.registerDynamic('5', ['6', '2'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('6');
  $__require('2');
  module.exports = function getOwnPropertyDescriptor(it, key) {
    return $.getDesc(it, key);
  };
});
$__System.registerDynamic("7", ["5"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("5"), __esModule: true };
});
$__System.registerDynamic("8", ["7"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var _Object$getOwnPropertyDescriptor = $__require("7")["default"];
  exports["default"] = function get(_x, _x2, _x3) {
    var _again = true;
    _function: while (_again) {
      var object = _x,
          property = _x2,
          receiver = _x3;
      _again = false;
      if (object === null) object = Function.prototype;
      var desc = _Object$getOwnPropertyDescriptor(object, property);
      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return undefined;
        } else {
          _x = parent;
          _x2 = property;
          _x3 = receiver;
          _again = true;
          desc = parent = undefined;
          continue _function;
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === undefined) {
          return undefined;
        }
        return getter.call(receiver);
      }
    }
  };
  exports.__esModule = true;
});
$__System.registerDynamic('9', ['6'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('6');
  module.exports = function create(P, D) {
    return $.create(P, D);
  };
});
$__System.registerDynamic("a", ["9"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("9"), __esModule: true };
});
$__System.registerDynamic('b', ['6', 'c', 'd', 'e'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var getDesc = $__require('6').getDesc,
      isObject = $__require('c'),
      anObject = $__require('d');
  var check = function (O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function (test, buggy, set) {
      try {
        set = $__require('e')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
});
$__System.registerDynamic('f', ['10', 'b'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('10');
  $export($export.S, 'Object', { setPrototypeOf: $__require('b').set });
});
$__System.registerDynamic('11', ['f', '12'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('f');
  module.exports = $__require('12').Object.setPrototypeOf;
});
$__System.registerDynamic("13", ["11"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("11"), __esModule: true };
});
$__System.registerDynamic("14", ["a", "13"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var _Object$create = $__require("a")["default"];
  var _Object$setPrototypeOf = $__require("13")["default"];
  exports["default"] = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = _Object$create(superClass && superClass.prototype, { constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      } });
    if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };
  exports.__esModule = true;
});
$__System.registerDynamic('15', ['16'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var defined = $__require('16');
  module.exports = function (it) {
    return Object(defined(it));
  };
});
$__System.registerDynamic('4', ['10', '12', '17'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('10'),
        core = $__require('12'),
        fails = $__require('17');
    module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY],
            exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function () {
            fn(1);
        }), 'Object', exp);
    };
});
$__System.registerDynamic('18', ['15', '4'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toObject = $__require('15');
  $__require('4')('keys', function ($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
});
$__System.registerDynamic('19', ['18', '12'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('18');
  module.exports = $__require('12').Object.keys;
});
$__System.registerDynamic("1a", ["19"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("19"), __esModule: true };
});
$__System.register('1b', ['1d', '1e', '1f', '1a', '1c'], function (_export) {
  var _createClass, _classCallCheck, _Symbol, _Object$keys, AcashaScope, AcashaElementScope, BlockedMethods, nameSymbol, authorSymbol, dependenciesSymbol, domNodeMethodsSymbol, domNodeListMethodsSymbol, AcashaExtension, extensionsSymbol, enabledExtensionsSymbol, extensionTargetsSymbol, bootStateSymbol, AcashaExtensionRepository;

  return {
    setters: [function (_d) {
      _createClass = _d['default'];
    }, function (_e) {
      _classCallCheck = _e['default'];
    }, function (_f) {
      _Symbol = _f['default'];
    }, function (_a) {
      _Object$keys = _a['default'];
    }, function (_c) {
      AcashaScope = _c.AcashaScope;
      AcashaElementScope = _c.AcashaElementScope;
      BlockedMethods = _c.BlockedMethods;
    }],
    execute: function () {
      'use strict';

      nameSymbol = _Symbol('name');
      authorSymbol = _Symbol('author');
      dependenciesSymbol = _Symbol('dependencies');
      domNodeMethodsSymbol = _Symbol('dom-node-methods');
      domNodeListMethodsSymbol = _Symbol('dom-node-list-methods');

      AcashaExtension = (function () {
        function AcashaExtension(settings) {
          _classCallCheck(this, AcashaExtension);

          settings = settings || {};
          this[nameSymbol] = undefined;
          this[authorSymbol] = 'Acasha Community';
          this[dependenciesSymbol] = [];
          this[domNodeMethodsSymbol] = {};
          this[domNodeListMethodsSymbol] = {};

          if (typeof this.init === 'function') {
            settings = this.init(settings);
          }

          if (typeof settings.name === 'string') {
            this[nameSymbol] = settings.name;
          }

          if (typeof settings.author === 'string') {
            this[authorSymbol] = settings.author;
          }

          if (Array.isArray(settings.dependencies)) {
            settings.dependencies.forEach(function (item) {
              if (typeof item === 'string') {
                this[dependenciesSymbol].push(item);
              }
            });
          }

          if (typeof settings.dom === 'object') {
            if (typeof settings.dom.node === 'object' && _Object$keys(settings.dom.node).length > 0) {
              for (var method in settings.dom.node) {
                if (typeof settings.dom.node[method] === 'function') {
                  this[domNodeMethodsSymbol][method] = settings.dom.node[method];
                }
              }
            }

            if (typeof settings.dom.nodeList === 'object' && _Object$keys(settings.dom.nodeList).length > 0) {
              for (var method in settings.dom.nodeList) {
                if (typeof settings.dom.nodeList[method] === 'function') {
                  this[domNodeListMethodsSymbol][method] = settings.dom.nodeList[method];
                }
              }
            }
          }
        }

        _createClass(AcashaExtension, [{
          key: 'init',
          value: function init(settings) {
            return settings;
          }
        }, {
          key: 'enable',
          value: function enable(extensions, targets) {
            if (!(extensions instanceof AcashaExtensionRepository)) {
              return false;
            }

            var dependenciesMet = 0;

            this[dependenciesSymbol].forEach(function (item) {
              if (extensions.extension(item)) {
                dependenciesMet++;
              } else {
                if (true === extensions.enable(item)) {
                  dependenciesMet++;
                }
              }
            });

            if (dependenciesMet < this[dependenciesSymbol].length) {
              console.warn('Unable to resolve all dependencies for extension: ' + this[nameSymbol]);
              return false;
            }

            if (this.doesExtendNode()) {
              for (var method in this[domNodeMethodsSymbol]) {
                var finder = function finder(item) {
                  return item === method;
                };

                if (BlockedMethods.AcashaScope.find(finder)) {
                  throw 'Acasha Interception Error: Can not overwrite blocked method: ' + method;
                } else {
                  targets.node.prototype[method] = this[domNodeMethodsSymbol][method];
                }
              }
            }

            if (this.doesExtendNodeList()) {
              for (var method in this[domNodeListMethodsSymbol]) {
                var finder = function finder(item) {
                  return item === method;
                };

                if (BlockedMethods.AcashaElementScope.find(finder)) {
                  throw 'Acasha Interception Error: Can not overwrite blocked method: ' + method;
                } else {
                  targets.nodeList.prototype[method] = this[domNodeListMethodsSymbol][method];
                }
              }
            }

            return true;
          }
        }, {
          key: 'doesExtendNode',
          value: function doesExtendNode() {
            return _Object$keys(this[domNodeMethodsSymbol]).length > 0;
          }
        }, {
          key: 'doesExtendNodeList',
          value: function doesExtendNodeList() {
            return _Object$keys(this[domNodeListMethodsSymbol]).length > 0;
          }
        }, {
          key: 'register',
          value: function register(repository) {
            if (repository instanceof AcashaExtensionRepository) {
              repository.attach(this);
            }
          }
        }, {
          key: 'name',
          get: function get() {
            return this[nameSymbol];
          },
          set: function set(value) {
            throw 'Acasha Extension Error: You can not modify this property: name';
          }
        }, {
          key: 'author',
          get: function get() {
            return this[authorSymbol];
          },
          set: function set(value) {
            throw 'Acasha Extension Error: You can not modify this property: author';
          }
        }], [{
          key: 'create',
          value: function create(settings) {
            return new this(settings);
          }
        }]);

        return AcashaExtension;
      })();

      extensionsSymbol = _Symbol('extensions');
      enabledExtensionsSymbol = _Symbol('extensions-enabled');
      extensionTargetsSymbol = _Symbol('extension-targets');
      bootStateSymbol = _Symbol('boot-state');

      AcashaExtensionRepository = (function () {
        function AcashaExtensionRepository() {
          _classCallCheck(this, AcashaExtensionRepository);

          this[extensionsSymbol] = {};
          this[enabledExtensionsSymbol] = [];
          this[extensionTargetsSymbol] = {
            node: AcashaElementScope,
            nodeList: AcashaScope
          };
          this[bootStateSymbol] = false;
        }

        _createClass(AcashaExtensionRepository, [{
          key: 'attach',
          value: function attach(extension) {
            if (extension instanceof AcashaExtension && !(extension.name in this[extensionsSymbol])) {
              this[extensionsSymbol][extension.name] = extension;
            }

            return this;
          }
        }, {
          key: 'enable',
          value: function enable(name) {
            if (name in this[extensionsSymbol]) {
              if (this[extensionsSymbol][name].enable(this, this[extensionTargetsSymbol])) {
                this[enabledExtensionsSymbol].push(this[extensionsSymbol][name].name);
                return true;
              }
            }

            return false;
          }
        }, {
          key: 'boot',
          value: function boot() {
            for (var extension in this.extensions) {
              this.enable(extension);
            }

            this[bootStateSymbol] = true;
          }
        }, {
          key: 'extension',
          value: function extension(name) {
            var isEnabledFinder = function isEnabledFinder(item) {
              return item === name;
            };

            if (name in this[extensionsSymbol] && this[enabledExtensionsSymbol.find(isEnabledFinder)] !== undefined) {
              return this[extensionSymbol][name];
            }

            return undefined;
          }
        }, {
          key: 'extensions',
          get: function get() {
            return this[extensionsSymbol];
          }
        }, {
          key: 'isBooted',
          get: function get() {
            return this[bootStateSymbol];
          }
        }]);

        return AcashaExtensionRepository;
      })();

      _export('AcashaExtension', AcashaExtension);

      _export('AcashaExtensionRepository', AcashaExtensionRepository);
    }
  };
});
$__System.registerDynamic('20', ['6'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('6');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
});
$__System.registerDynamic("21", ["20"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("20"), __esModule: true };
});
$__System.registerDynamic("1d", ["21"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var _Object$defineProperty = $__require("21")["default"];
  exports["default"] = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  exports.__esModule = true;
});
$__System.registerDynamic("1e", [], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var global = this || self,
      GLOBAL = global;
  exports["default"] = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  exports.__esModule = true;
});
$__System.registerDynamic('22', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };
});
$__System.registerDynamic('e', ['22'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var aFunction = $__require('22');
  module.exports = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () {
      return fn.apply(that, arguments);
    };
  };
});
$__System.registerDynamic('10', ['23', '12', 'e'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('23'),
      core = $__require('12'),
      ctx = $__require('e'),
      PROTOTYPE = 'prototype';
  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports) continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function (C) {
        var F = function (param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
});
$__System.registerDynamic('24', ['17'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = !$__require('17')(function () {
    return Object.defineProperty({}, 'a', { get: function () {
        return 7;
      } }).a != 7;
  });
});
$__System.registerDynamic('25', ['6', '26', '24'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('6'),
      createDesc = $__require('26');
  module.exports = $__require('24') ? function (object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
});
$__System.registerDynamic('27', ['25'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('25');
});
$__System.registerDynamic("17", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
});
$__System.registerDynamic("28", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function (it, key) {
    return hasOwnProperty.call(it, key);
  };
});
$__System.registerDynamic('29', ['6', '28', '2a'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var def = $__require('6').setDesc,
      has = $__require('28'),
      TAG = $__require('2a')('toStringTag');
  module.exports = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
      configurable: true,
      value: tag
    });
  };
});
$__System.registerDynamic('2b', ['23'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var global = $__require('23'),
        SHARED = '__core-js_shared__',
        store = global[SHARED] || (global[SHARED] = {});
    module.exports = function (key) {
        return store[key] || (store[key] = {});
    };
});
$__System.registerDynamic('2c', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var id = 0,
      px = Math.random();
  module.exports = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
});
$__System.registerDynamic('23', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});
$__System.registerDynamic('2a', ['2b', '2c', '23'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var store = $__require('2b')('wks'),
        uid = $__require('2c'),
        Symbol = $__require('23').Symbol;
    module.exports = function (name) {
        return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
    };
});
$__System.registerDynamic('2d', ['6', '3'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var $ = $__require('6'),
        toIObject = $__require('3');
    module.exports = function (object, el) {
        var O = toIObject(object),
            keys = $.getKeys(O),
            length = keys.length,
            index = 0,
            key;
        while (length > index) if (O[key = keys[index++]] === el) return key;
    };
});
$__System.registerDynamic('2e', ['3', '6'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toIObject = $__require('3'),
      getNames = $__require('6').getNames,
      toString = {}.toString;
  var windowNames = typeof window == 'object' && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  var getWindowNames = function (it) {
    try {
      return getNames(it);
    } catch (e) {
      return windowNames.slice();
    }
  };
  module.exports.get = function getOwnPropertyNames(it) {
    if (windowNames && toString.call(it) == '[object Window]') return getWindowNames(it);
    return getNames(toIObject(it));
  };
});
$__System.registerDynamic("6", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
});
$__System.registerDynamic('2f', ['6'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('6');
  module.exports = function (it) {
    var keys = $.getKeys(it),
        getSymbols = $.getSymbols;
    if (getSymbols) {
      var symbols = getSymbols(it),
          isEnum = $.isEnum,
          i = 0,
          key;
      while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) keys.push(key);
    }
    return keys;
  };
});
$__System.registerDynamic('30', ['31'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var cof = $__require('31');
  module.exports = Array.isArray || function (arg) {
    return cof(arg) == 'Array';
  };
});
$__System.registerDynamic('c', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
});
$__System.registerDynamic('d', ['c'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('c');
  module.exports = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };
});
$__System.registerDynamic("31", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toString = {}.toString;

  module.exports = function (it) {
    return toString.call(it).slice(8, -1);
  };
});
$__System.registerDynamic('32', ['31'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var cof = $__require('31');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
});
$__System.registerDynamic("16", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };
});
$__System.registerDynamic('3', ['32', '16'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var IObject = $__require('32'),
      defined = $__require('16');
  module.exports = function (it) {
    return IObject(defined(it));
  };
});
$__System.registerDynamic("26", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
});
$__System.registerDynamic("33", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = true;
});
$__System.registerDynamic('34', ['6', '23', '28', '24', '10', '27', '17', '2b', '29', '2c', '2a', '2d', '2e', '2f', '30', 'd', '3', '26', '33'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var $ = $__require('6'),
      global = $__require('23'),
      has = $__require('28'),
      DESCRIPTORS = $__require('24'),
      $export = $__require('10'),
      redefine = $__require('27'),
      $fails = $__require('17'),
      shared = $__require('2b'),
      setToStringTag = $__require('29'),
      uid = $__require('2c'),
      wks = $__require('2a'),
      keyOf = $__require('2d'),
      $names = $__require('2e'),
      enumKeys = $__require('2f'),
      isArray = $__require('30'),
      anObject = $__require('d'),
      toIObject = $__require('3'),
      createDesc = $__require('26'),
      getDesc = $.getDesc,
      setDesc = $.setDesc,
      _create = $.create,
      getNames = $names.get,
      $Symbol = global.Symbol,
      $JSON = global.JSON,
      _stringify = $JSON && $JSON.stringify,
      setter = false,
      HIDDEN = wks('_hidden'),
      isEnum = $.isEnum,
      SymbolRegistry = shared('symbol-registry'),
      AllSymbols = shared('symbols'),
      useNative = typeof $Symbol == 'function',
      ObjectProto = Object.prototype;
  var setSymbolDesc = DESCRIPTORS && $fails(function () {
    return _create(setDesc({}, 'a', { get: function () {
        return setDesc(this, 'a', { value: 7 }).a;
      } })).a != 7;
  }) ? function (it, key, D) {
    var protoDesc = getDesc(ObjectProto, key);
    if (protoDesc) delete ObjectProto[key];
    setDesc(it, key, D);
    if (protoDesc && it !== ObjectProto) setDesc(ObjectProto, key, protoDesc);
  } : setDesc;
  var wrap = function (tag) {
    var sym = AllSymbols[tag] = _create($Symbol.prototype);
    sym._k = tag;
    DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: function (value) {
        if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, createDesc(1, value));
      }
    });
    return sym;
  };
  var isSymbol = function (it) {
    return typeof it == 'symbol';
  };
  var $defineProperty = function defineProperty(it, key, D) {
    if (D && has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!has(it, HIDDEN)) setDesc(it, HIDDEN, createDesc(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
        D = _create(D, { enumerable: createDesc(0, false) });
      }
      return setSymbolDesc(it, key, D);
    }
    return setDesc(it, key, D);
  };
  var $defineProperties = function defineProperties(it, P) {
    anObject(it);
    var keys = enumKeys(P = toIObject(P)),
        i = 0,
        l = keys.length,
        key;
    while (l > i) $defineProperty(it, key = keys[i++], P[key]);
    return it;
  };
  var $create = function create(it, P) {
    return P === undefined ? _create(it) : $defineProperties(_create(it), P);
  };
  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key);
    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };
  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    var D = getDesc(it = toIObject(it), key);
    if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
    return D;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = getNames(toIObject(it)),
        result = [],
        i = 0,
        key;
    while (names.length > i) if (!has(AllSymbols, key = names[i++]) && key != HIDDEN) result.push(key);
    return result;
  };
  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var names = getNames(toIObject(it)),
        result = [],
        i = 0,
        key;
    while (names.length > i) if (has(AllSymbols, key = names[i++])) result.push(AllSymbols[key]);
    return result;
  };
  var $stringify = function stringify(it) {
    if (it === undefined || isSymbol(it)) return;
    var args = [it],
        i = 1,
        $$ = arguments,
        replacer,
        $replacer;
    while ($$.length > i) args.push($$[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  };
  var buggyJSON = $fails(function () {
    var S = $Symbol();
    return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
  });
  if (!useNative) {
    $Symbol = function Symbol() {
      if (isSymbol(this)) throw TypeError('Symbol is not a constructor');
      return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
    };
    redefine($Symbol.prototype, 'toString', function toString() {
      return this._k;
    });
    isSymbol = function (it) {
      return it instanceof $Symbol;
    };
    $.create = $create;
    $.isEnum = $propertyIsEnumerable;
    $.getDesc = $getOwnPropertyDescriptor;
    $.setDesc = $defineProperty;
    $.setDescs = $defineProperties;
    $.getNames = $names.get = $getOwnPropertyNames;
    $.getSymbols = $getOwnPropertySymbols;
    if (DESCRIPTORS && !$__require('33')) {
      redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }
  }
  var symbolStatics = {
    'for': function (key) {
      return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
    },
    keyFor: function keyFor(key) {
      return keyOf(SymbolRegistry, key);
    },
    useSetter: function () {
      setter = true;
    },
    useSimple: function () {
      setter = false;
    }
  };
  $.each.call(('hasInstance,isConcatSpreadable,iterator,match,replace,search,' + 'species,split,toPrimitive,toStringTag,unscopables').split(','), function (it) {
    var sym = wks(it);
    symbolStatics[it] = useNative ? sym : wrap(sym);
  });
  setter = true;
  $export($export.G + $export.W, { Symbol: $Symbol });
  $export($export.S, 'Symbol', symbolStatics);
  $export($export.S + $export.F * !useNative, 'Object', {
    create: $create,
    defineProperty: $defineProperty,
    defineProperties: $defineProperties,
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    getOwnPropertyNames: $getOwnPropertyNames,
    getOwnPropertySymbols: $getOwnPropertySymbols
  });
  $JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', { stringify: $stringify });
  setToStringTag($Symbol, 'Symbol');
  setToStringTag(Math, 'Math', true);
  setToStringTag(global.JSON, 'JSON', true);
});
$__System.registerDynamic("35", [], true, function ($__require, exports, module) {
  /* */
  "format cjs";

  var global = this || self,
      GLOBAL = global;
});
$__System.registerDynamic('12', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var core = module.exports = { version: '1.2.6' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
$__System.registerDynamic('36', ['34', '35', '12'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('34');
  $__require('35');
  module.exports = $__require('12').Symbol;
});
$__System.registerDynamic('37', ['36'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('36');
});
$__System.registerDynamic("1f", ["37"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("37"), __esModule: true };
});
$__System.register('38', [], function (_export) {
  'use strict';

  function ensureNodeList(resource) {
    if (!(resource instanceof NodeList)) {
      throw 'Acasha Error: Acasha can only operate on NodeList objects here.';
    }

    return resource;
  }

  function ensureElement(resource) {
    if (!(resource instanceof HTMLElement)) {
      throw 'Acasha Error: Acasha can only operate on HTMLElement objects here.';
    }

    return resource;
  }

  return {
    setters: [],
    execute: function () {
      _export('ensureNodeList', ensureNodeList);

      _export('ensureElement', ensureElement);
    }
  };
});
$__System.register('1c', ['38', '1d', '1e', '1f'], function (_export) {
  var ensureNodeList, ensureElement, _createClass, _classCallCheck, _Symbol, traversableSymbol, selectorSymbol, contextSymbol, AcashaScope, elementSymbol, AcashaElementScope, BlockedMethods;

  function Scope(selector, context) {
    context = context || document;
    nodes = selector || [];

    if (typeof selector === 'string') {
      var nodes = context.querySelectorAll(selector);
    }

    return new AcashaScope(nodes, selector, context);
  }

  return {
    setters: [function (_) {
      ensureNodeList = _.ensureNodeList;
      ensureElement = _.ensureElement;
    }, function (_d) {
      _createClass = _d['default'];
    }, function (_e) {
      _classCallCheck = _e['default'];
    }, function (_f) {
      _Symbol = _f['default'];
    }],
    execute: function () {
      'use strict';

      traversableSymbol = _Symbol('traversable');
      selectorSymbol = _Symbol('selector');
      contextSymbol = _Symbol('context');

      AcashaScope = (function () {
        function AcashaScope(traversable, selector, context) {
          _classCallCheck(this, AcashaScope);

          if (context instanceof AcashaElementScope) {
            context = context.raw();
          }

          this[traversableSymbol] = ensureNodeList(traversable);
          this[selectorSymbol] = selector;
          this[contextSymbol] = context;
        }

        _createClass(AcashaScope, [{
          key: 'selector',
          get: function get() {
            return this[selectorSymbol];
          },
          set: function set(value) {
            throw 'Acasha Error: You can not modify this';
          }
        }, {
          key: 'context',
          get: function get() {
            return this[contextSymbol];
          },
          set: function set(value) {
            throw 'Acasha Error: You can not modify this';
          }
        }, {
          key: 'list',
          get: function get() {
            return this[traversableSymbol];
          },
          set: function set(value) {
            throw 'Acasha Error: You can not modify this';
          }
        }]);

        return AcashaScope;
      })();

      elementSymbol = _Symbol('element');

      AcashaElementScope = (function () {
        function AcashaElementScope(element) {
          _classCallCheck(this, AcashaElementScope);

          this[elementSymbol] = ensureElement(element);
        }

        _createClass(AcashaElementScope, [{
          key: 'raw',
          value: function raw() {
            return this[elementSymbol];
          }
        }]);

        return AcashaElementScope;
      })();

      BlockedMethods = {
        AcashaScope: ['constructor', 'selector', 'list', 'context'],
        AcashaElementScope: ['constructor', 'raw']
      };

      _export('AcashaScope', AcashaScope);

      _export('AcashaElementScope', AcashaElementScope);

      _export('Scope', Scope);

      _export('BlockedMethods', BlockedMethods);
    }
  };
});
$__System.register('39', ['8', '14', '1d', '1e', '1b', '1c'], function (_export) {
  var _get, _inherits, _createClass, _classCallCheck, AcashaExtension, Scope, AcashaElementScope, DocumentObjectModel;

  return {
    setters: [function (_) {
      _get = _['default'];
    }, function (_2) {
      _inherits = _2['default'];
    }, function (_d) {
      _createClass = _d['default'];
    }, function (_e) {
      _classCallCheck = _e['default'];
    }, function (_b) {
      AcashaExtension = _b.AcashaExtension;
    }, function (_c) {
      Scope = _c.Scope;
      AcashaElementScope = _c.AcashaElementScope;
    }],
    execute: function () {
      'use strict';

      DocumentObjectModel = (function (_AcashaExtension) {
        _inherits(DocumentObjectModel, _AcashaExtension);

        function DocumentObjectModel() {
          _classCallCheck(this, DocumentObjectModel);

          _get(Object.getPrototypeOf(DocumentObjectModel.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(DocumentObjectModel, [{
          key: 'init',
          value: function init() {
            return {
              name: 'acasha/dom',
              author: 'nihylum',
              dom: {
                node: {
                  parent: function parent() {
                    return new AcashaElementScope(this.raw().parentNode);
                  },
                  remove: function remove() {
                    this.parent().raw().removeChild(this.raw());

                    return undefined;
                  },
                  children: function children() {
                    return new AcashaScope(this.raw().childNodes, '> *', this.raw());
                  },
                  after: function after(variant) {},
                  before: function before(variant) {},
                  html: function html(variant) {
                    if (typeof variant === 'string') {
                      this.raw().innerHTML = variant;
                    }

                    return this;
                  }
                },
                nodeList: {
                  first: function first(selector) {
                    if (typeof selector === 'undefined') {
                      return new AcashaElementScope(this.list.item(0));
                    }

                    return this.find(selector).first();
                  },
                  last: function last() {
                    if (typeof selector === 'undefined') {
                      return new AcashaElementScope(this.list.item(this.list.length - 1));
                    }

                    return this.find(selector).first();
                  },
                  each: function each(callback) {
                    if (typeof callback !== 'function') {
                      throw 'Acasha Iteration Error: Can not iterate without a handler callback';
                    }

                    this.list.forEach(function (item) {
                      callback.call(new AcashaElementScope(item));
                    });

                    return this;
                  },
                  parent: function parent() {
                    return this.first().parent();
                  },
                  find: function find(selector) {
                    return Scope(this.selector + ' ' + selector, this.context);
                  },
                  remove: function remove(selector) {
                    if (typeof selector === 'undefined') {
                      this.each(function () {
                        this.remove();
                      });

                      return undefined;
                    }

                    return this.find(selector).remove();
                  },
                  html: function html(variant) {
                    this.each(function () {
                      this.html(variant);
                    });

                    return this;
                  }
                }
              }
            };
          }
        }]);

        return DocumentObjectModel;
      })(AcashaExtension);

      _export('default', DocumentObjectModel);
    }
  };
});
$__System.register('1', ['39', '1c', '1b'], function (_export) {
  'use strict';

  var DOMExtension, Scope, AcashaScope, AcashaElementScope, AcashaExtensionRepository, extensions;

  function query(selector, context) {
    if (!extensions.isBooted) {
      extensions.boot();
    }

    return Scope(selector, context);
  }

  return {
    setters: [function (_) {
      DOMExtension = _['default'];
    }, function (_c) {
      Scope = _c.Scope;
      AcashaScope = _c.AcashaScope;
      AcashaElementScope = _c.AcashaElementScope;
    }, function (_b) {
      AcashaExtensionRepository = _b.AcashaExtensionRepository;
    }],
    execute: function () {
      extensions = new AcashaExtensionRepository();

      extensions.attach(DOMExtension.create());query.extensions = extensions;
      query.classes = {
        node: AcashaElementScope,
        nodeList: AcashaScope
      };

      window.$ = query;
    }
  };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=acasha.browser.js.map