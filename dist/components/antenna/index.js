"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AntennaTypes = exports.Antenna = void 0;

var _react = _interopRequireDefault(require("react"));

var _Default = require("./Default");

var _Snoo = require("./Snoo");

var _RabbitEars = require("./RabbitEars");

var _Bender = require("./Bender");

var _Shrek = require("./Shrek");

var _Satellite = require("./Satellite");

var _Calculon = require("./Calculon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AntennaTypes = {
  default: /*#__PURE__*/_react.default.createElement(_Default.Default, null),
  snoo: /*#__PURE__*/_react.default.createElement(_Snoo.Snoo, null),
  rabbitEars: /*#__PURE__*/_react.default.createElement(_RabbitEars.RabbitEars, null),
  bender: /*#__PURE__*/_react.default.createElement(_Bender.Bender, null),
  shrek: /*#__PURE__*/_react.default.createElement(_Shrek.Shrek, null),
  satellite: /*#__PURE__*/_react.default.createElement(_Satellite.Satellite, null),
  calculon: /*#__PURE__*/_react.default.createElement(_Calculon.Calculon, null)
};
exports.AntennaTypes = AntennaTypes;

const Antenna = _ref => {
  let {
    type
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("g", {
    id: "Antenna"
  }, type ? AntennaTypes[type] : AntennaTypes["default"]);
};

exports.Antenna = Antenna;