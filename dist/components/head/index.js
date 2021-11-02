"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadTypes = exports.Head = void 0;

var _react = _interopRequireDefault(require("react"));

var _Default = require("./Default");

var _LongNeck = require("./LongNeck");

var _Sharp = require("./Sharp");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HeadTypes = {
  default: /*#__PURE__*/_react.default.createElement(_Default.Default, null),
  longNeck: /*#__PURE__*/_react.default.createElement(_LongNeck.LongNeck, null),
  sharp: /*#__PURE__*/_react.default.createElement(_Sharp.Sharp, null)
};
exports.HeadTypes = HeadTypes;

const Head = _ref => {
  let {
    type
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("g", {
    id: "Head"
  }, type ? HeadTypes[type] : HeadTypes['default']);
};

exports.Head = Head;