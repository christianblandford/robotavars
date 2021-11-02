"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Face = void 0;

var _react = _interopRequireDefault(require("react"));

var _goggles = require("../goggles");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Face = _ref => {
  let {
    eyeType,
    mouthType,
    eyebrowType,
    accessoryType
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("g", {
    id: "Face"
  }, /*#__PURE__*/_react.default.createElement(_goggles.Goggles, null), /*#__PURE__*/_react.default.createElement(_.Eyes, {
    type: eyeType
  }), /*#__PURE__*/_react.default.createElement(_.Mouth, {
    type: mouthType
  }));
};

exports.Face = Face;