"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ears = exports.EarTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _Default = require("./Default");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EarTypes = {
  default: /*#__PURE__*/_react.default.createElement(_Default.Default, null)
};
exports.EarTypes = EarTypes;

const Ears = _ref => {
  let {
    type
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("g", {
    id: "Ears"
  }, type ? EarTypes[type] : EarTypes['default']);
};

exports.Ears = Ears;