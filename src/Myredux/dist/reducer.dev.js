"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rohit = Rohit;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Rohit() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  console.log("action");

  switch (type) {
    case "Initialise":
      {
        state = _objectSpread({}, state);

        if (localStorage.token) {
          state['isloggedin'] = true;
        }

        return state;
      }

    case "Login":
      {
        state = _objectSpread({}, state);
        state['isloggedin'] = true;
        return state;
      }

    case "Oder":
      {
        state = _objectSpread({}, state);
        state['oderplace'] = payload;
        return state;
      }

    case "OderList":
      {
        state = _objectSpread({}, state);
        state['MyOder'] = payload;
        return state;
      }

    default:
      return state;
  }
}