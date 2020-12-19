var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
import { h } from "@vue/composition-api";
var V_SLOT = "v-slot";
var CLASS_NAME = "class";
export var getAttributeByName = function (options, name) {
  return options[name];
};
export var getEventNames = function (options) {
  return Object.keys(options).filter(function (option) {
    return option.startsWith("on");
  });
};
export var mapEventNamesToHandlerPairs = function (options, eventNames) {
  return Object.fromEntries(
    eventNames.map(function (eventName) {
      return [eventName.substring(2).toLowerCase(), options[eventName]];
    })
  );
};
export var getAttributes = function (options, excluded) {
  return Object.fromEntries(
    Object.entries(options).filter(function (_a) {
      var option = _a[0];
      return !excluded.includes(option);
    })
  );
};
export var isElementAComponent = function (element) {
  return typeof element !== "string";
};
export var getJArgumentsWithOptions = function (element, options) {
  var _a;
  var children = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    children[_i - 2] = arguments[_i];
  }
  var eventNames = getEventNames(options);
  var props = getAttributes(
    options,
    __spreadArrays([CLASS_NAME, V_SLOT], eventNames)
  );
  var elementIsAComponent = isElementAComponent(element);
  var data =
    ((_a = {
      class: getAttributeByName(options, CLASS_NAME),
      slot: getAttributeByName(options, V_SLOT),
      on: mapEventNamesToHandlerPairs(options, eventNames),
    }),
    (_a[elementIsAComponent ? "props" : "attrs"] = props),
    _a);
  return [element, data, children];
};
export var j = function (element, options) {
  var children = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    children[_i - 2] = arguments[_i];
  }
  return options
    ? h.apply(
        void 0,
        getJArgumentsWithOptions.apply(
          void 0,
          __spreadArrays([element, options], children)
        )
      )
    : h(element, children);
};
