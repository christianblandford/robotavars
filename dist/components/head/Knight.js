"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Knight = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Knight = () => {
  return /*#__PURE__*/_react.default.createElement("g", {
    className: "Knight",
    transform: "translate(84, 68)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M131 120.66V48.4C131 26.63 102.45 1 66.56 1S1 26.63 1 48.4v72.26l65.6 27.92z",
    fill: "#a2a1a1",
    stroke: "#414042",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }));
};

exports.Knight = Knight;