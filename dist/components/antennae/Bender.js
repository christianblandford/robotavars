"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bender = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Bender = () => {
  return /*#__PURE__*/_react.default.createElement("g", {
    id: "BenderAntenna",
    "data-name": "BenderAntenna",
    transform: "translate(133, 2)"
  }, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("style", null, '.BenderAntenna{fill:#a2a1a1;stroke:#414042;stroke-miterlimit:10;stroke-width:2px}')), /*#__PURE__*/_react.default.createElement("path", {
    className: "BenderAntenna",
    d: "M1 69.5C1 64.25 8.61 57 18 57s17 7.25 17 12.5"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#6d6e71",
    stroke: "#414042",
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M16.17 7.75l-2 49.25h7.66l-2-49.25"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    className: "BenderAntenna",
    cx: 18,
    cy: 7,
    r: 6
  }));
};

exports.Bender = Bender;