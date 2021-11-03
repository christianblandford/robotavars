"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snoo = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Snoo = () => {
  return /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(152, 40)"
  }, /*#__PURE__*/_react.default.createElement("g", {
    "data-name": "SnooAntenna",
    stroke: "#414042",
    strokeMiterlimit: 10,
    strokeWidth: 4
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "none",
    d: "M1.89 33.06L12.37 3.48l28.51 6.51"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: 52.89,
    cy: 14,
    r: 12,
    fill: "#fff"
  })));
};

exports.Snoo = Snoo;