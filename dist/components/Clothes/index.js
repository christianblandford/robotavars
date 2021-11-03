"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Clothes = void 0;

var _react = _interopRequireDefault(require("react"));

var _avataaars = require("avataaars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Clothes = _ref => {
  let {
    size,
    type,
    color,
    graphic
  } = _ref;

  const clothing = /*#__PURE__*/_react.default.cloneElement( /*#__PURE__*/_react.default.createElement(_avataaars.Piece, {
    pieceType: "clothe",
    pieceSize: size,
    clotheType: type || "ShirtCrewNeck",
    clotheColor: color || "Black",
    graphicType: graphic || "Pizza",
    viewBox: "0 0 264 270"
  }));

  return clothing;
};

exports.Clothes = Clothes;