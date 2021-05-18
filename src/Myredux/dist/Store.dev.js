"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reducer = require("./reducer");

var store = (0, _redux.createStore)(_reducer.Rohit, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch({
  type: "Login"
}); // store.dispatch({
//     type:"Logout"
// })

store.dispatch({
  type: 'Oder'
});
console.log("My Store", store.getState());
var _default = store;
exports["default"] = _default;