"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Default = () => {
  return /*#__PURE__*/_react.default.createElement("g", {
    id: "DefaultMouth",
    transform: "translate(118, 165)"
  }, /*#__PURE__*/_react.default.createElement("style", null, '.DefaultSmile{stroke:#414042;stroke-miterlimit:10;stroke-width:3px;fill:none}'), /*#__PURE__*/_react.default.createElement("rect", {
    x: 1.5,
    y: 1.5,
    width: 64,
    height: 16,
    rx: 2,
    stroke: "#414042",
    strokeMiterlimit: 10,
    strokeWidth: 3,
    fill: "#fff"
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "DefaultSmile",
    d: "M30.4 1.84v16.52M36.4 1.84v16.52M42.4 1.84v16.52M48.4 1.84v15.53M54.4 1.84V18M60.4 1.84V16M24.4 1.84L24.5 17M18.4 1.84L18.5 17M12.5 2v15M6.4 1.34V17"
  }));
};

exports.Default = Default;