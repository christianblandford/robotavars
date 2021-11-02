"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Eyes = exports.EyeTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _Default = require("./Default");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EyeTypes = {
  default: /*#__PURE__*/_react.default.createElement(_Default.Default, null)
};
exports.EyeTypes = EyeTypes;

const Eyes = _ref => {
  let {
    type
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("g", {
    id: "Eyes"
  }, type ? EyeTypes[type] : EyeTypes['default']);
};

exports.Eyes = Eyes;