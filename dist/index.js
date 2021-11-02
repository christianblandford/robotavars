"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mouthTypes = exports.headTypes = exports.antennaeTypes = exports.Robotavar = void 0;

var _react = _interopRequireDefault(require("react"));

var _components = require("./components");

const _excluded = ["antenna", "body", "head", "size", "type", "eyes", "ears", "mouth", "eyebrows", "clothes", "graphic", "fabricColor"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const headTypes = Object.keys(_components.HeadTypes);
exports.headTypes = headTypes;
const antennaeTypes = Object.keys(_components.AntennaeTypes);
exports.antennaeTypes = antennaeTypes;
const mouthTypes = Object.keys(_components.MouthTypes);
exports.mouthTypes = mouthTypes;

const Robotavar = _ref => {
  let {
    antenna,
    body,
    head,
    size,
    type,
    eyes,
    ears,
    mouth,
    eyebrows,
    clothes,
    graphic,
    fabricColor
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("svg", _extends({
    id: "Robotavar",
    "data-name": "Robotavar",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 300 300",
    x: "0px",
    y: "0px",
    width: size,
    height: size,
    style: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    }
  }, rest), /*#__PURE__*/_react.default.createElement(_components.Body, null), /*#__PURE__*/_react.default.createElement(_components.Clothes, {
    type: clothes,
    color: fabricColor,
    graphic: graphic,
    size: "300"
  }), /*#__PURE__*/_react.default.createElement(_components.Neck, null), /*#__PURE__*/_react.default.createElement(_components.Antennae, {
    type: antenna
  }), /*#__PURE__*/_react.default.createElement(_components.Ears, {
    type: ears
  }), /*#__PURE__*/_react.default.createElement(_components.Head, {
    type: head
  }), /*#__PURE__*/_react.default.createElement(_components.Face, {
    eyeType: eyes,
    mouthType: mouth,
    eyebrowType: eyebrows
  }));
};

exports.Robotavar = Robotavar;