"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shrek = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Shrek = () => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("style", null, '.antennaStem,.antennaBall{fill:#808285;stroke-width:2px;stroke:#414042;stroke-miterlimit:10}.antennaBall{fill:#bcbec0;stroke-width:3px}')), /*#__PURE__*/_react.default.createElement("g", {
    id: "ShrekAntenna",
    transform: "translate(80, 44)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    className: "antennaStem",
    d: "M36.66 35.58L14.13 5l-7.47 6.67L28.36 41"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    className: "antennaBall",
    cx: 15.5,
    cy: 15.5,
    r: 14
  }), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    className: "antennaStem",
    d: "M108.34 37.58L130.88 7l7.46 6.67L116.64 43"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    className: "antennaBall",
    cx: 129.5,
    cy: 17.5,
    r: 14
  }))));
};

exports.Shrek = Shrek;