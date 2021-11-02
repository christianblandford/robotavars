"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sharp = void 0;

var _react = _interopRequireDefault(require("react"));

var _headShadow = require("./headShadow");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Sharp = () => {
  return /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(84, 68)"
  }, /*#__PURE__*/_react.default.createElement(_headShadow.HeadShadow, {
    x: 40,
    y: 143
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M83.05 153h-34l-48-66.59S9.16 27.34 22 17A71.64 71.64 0 0166.6 1a69.63 69.63 0 0143.45 15.48C123 26.9 131.05 83 131.05 83z",
    fill: "#a2a1a1",
    stroke: "#414042",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    "data-name": "Layer 1"
  }));
};

exports.Sharp = Sharp;