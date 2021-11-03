"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadShadow = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HeadShadow = _ref => {
  let {
    x,
    y
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("style", null, '.headShadowClass{opacity:0.30;}')), /*#__PURE__*/_react.default.createElement("rect", {
    x: x,
    y: y,
    className: "headShadowClass",
    width: 54,
    height: 5
  }));
};

exports.HeadShadow = HeadShadow;