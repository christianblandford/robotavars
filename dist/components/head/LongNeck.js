"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongNeck = void 0;

var _react = _interopRequireDefault(require("react"));

var _headShadow = require("./headShadow");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LongNeck = () => {
  return /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(84, 68)"
  }, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("style", null, '.longNeckHead{fill:#a2a1a1;stroke:#414042;stroke-miterlimit:10;stroke-width:2px}')), /*#__PURE__*/_react.default.createElement(_headShadow.HeadShadow, {
    x: 40,
    y: 135
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "longNeckHead",
    d: "M131 54.47C131 29.91 102.45 1 66.56 1S1 29.91 1 54.47v70.19C1 130.92 30.42 136 36.56 136h58.88c6.14 0 35.56-5.08 35.56-11.34z"
  }));
};

exports.LongNeck = LongNeck;