"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MouthTypes = exports.Mouth = void 0;

var _react = _interopRequireDefault(require("react"));

var _Default = require("./Default");

var _SoftSmile = require("./SoftSmile");

var _Smile = require("./Smile");

var _Concerned = require("./Concerned");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MouthTypes = {
  default: /*#__PURE__*/_react.default.createElement(_Default.Default, null),
  softSmile: /*#__PURE__*/_react.default.createElement(_SoftSmile.SoftSmile, null),
  smile: /*#__PURE__*/_react.default.createElement(_Smile.Smile, null),
  concerned: /*#__PURE__*/_react.default.createElement(_Concerned.Concerned, null)
};
exports.MouthTypes = MouthTypes;

const Mouth = _ref => {
  let {
    type
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("g", {
    id: "Mouth"
  }, type ? MouthTypes[type] : MouthTypes['default']);
};

exports.Mouth = Mouth;