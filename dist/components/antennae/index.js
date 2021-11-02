"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AntennaeTypes = exports.Antennae = void 0;

var _react = _interopRequireDefault(require("react"));

var _Default = require("./Default");

var _Snoo = require("./Snoo");

var _RabbitEars = require("./RabbitEars");

var _Bender = require("./Bender");

var _Shrek = require("./Shrek");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AntennaeTypes = {
  default: /*#__PURE__*/_react.default.createElement(_Default.Default, null),
  snoo: /*#__PURE__*/_react.default.createElement(_Snoo.Snoo, null),
  rabbitEars: /*#__PURE__*/_react.default.createElement(_RabbitEars.RabbitEars, null),
  bender: /*#__PURE__*/_react.default.createElement(_Bender.Bender, null),
  shrek: /*#__PURE__*/_react.default.createElement(_Shrek.Shrek, null)
};
exports.AntennaeTypes = AntennaeTypes;

const Antennae = _ref => {
  let {
    type
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("g", {
    id: "Antennae"
  }, type ? AntennaeTypes[type] : AntennaeTypes['default']);
};

exports.Antennae = Antennae;