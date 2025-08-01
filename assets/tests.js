'use strict';

define("catch-the-mouse/tests/helpers/ember-power-select", ["exports", "@ember/debug", "ember-power-select/test-support/helpers"], function (_exports, _debug, _helpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.clickTrigger = void 0;
  _exports.default = deprecatedRegisterHelpers;
  _exports.typeInSearch = _exports.triggerKeydown = _exports.touchTrigger = _exports.selectChoose = _exports.nativeTouch = _exports.nativeMouseUp = _exports.nativeMouseDown = _exports.findContains = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"ember-power-select/test-support/helpers",0,"ember-power-select/test-support/helpers"eaimeta@70e063a35619d71f
  function deprecateHelper(fn, name) {
    return function (...args) {
      (true && !(false) && (0, _debug.deprecate)(`DEPRECATED \`import { ${name} } from '../../tests/helpers/ember-power-select';\` is deprecated. Please, replace it with \`import { ${name} } from 'ember-power-select/test-support/helpers';\``, false, {
        until: '1.11.0',
        id: `ember-power-select-test-support-${name}`
      }));
      return fn(...args);
    };
  }
  let findContains = _exports.findContains = deprecateHelper(_helpers.findContains, 'findContains');
  let nativeMouseDown = _exports.nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  let nativeMouseUp = _exports.nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  let triggerKeydown = _exports.triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  let typeInSearch = _exports.typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  let clickTrigger = _exports.clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  let nativeTouch = _exports.nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  let touchTrigger = _exports.touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  let selectChoose = _exports.selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');
  function deprecatedRegisterHelpers() {
    (true && !(false) && (0, _debug.deprecate)("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, {
      until: '1.11.0',
      id: 'ember-power-select-test-support-register-helpers'
    }));
    return (0, _helpers.default)();
  }
});
define("catch-the-mouse/tests/test-helper", ["catch-the-mouse/app", "catch-the-mouse/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"catch-the-mouse/app",0,"catch-the-mouse/config/environment",0,"@ember/test-helpers",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('catch-the-mouse/config/environment', [], function() {
  var prefix = 'catch-the-mouse';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('catch-the-mouse/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
