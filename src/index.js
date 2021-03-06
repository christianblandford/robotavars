import React from "react";

import {
  Head,
  HeadTypes,
  Body,
  MouthTypes,
  Face,
  Antenna,
  AntennaTypes,
  Ears,
  Neck,
  Clothes,
} from "./components";

export const headTypes = Object.keys(HeadTypes);
export const antennaTypes = Object.keys(AntennaTypes);
export const mouthTypes = Object.keys(MouthTypes);

export const Robotavar = ({
  antenna,
  clothing,
  clothingColor,
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
  fabricColor,
  ...rest
}) => {
  return (
    <svg
      id="Robotavar"
      data-name="Robotavar"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 300 300`}
      x="0px"
      y="0px"
      width={size}
      height={size}
      style={{ width: `${size}px`, height: `${size}px` }}
      {...rest}
    >
      {/* Body */}
      <Body />
      {/* Clothing */}
      <Clothes
        type={clothes}
        color={fabricColor}
        graphic={graphic}
        size={"300"}
      />
      {/* Neck */}
      <Neck />
      {/* Antenna */}
      <Antenna type={antenna} />
      {/* Ears */}
      <Ears type={ears} />
      {/* Head */}
      <Head type={head} />
      {/* Face */}
      <Face eyeType={eyes} mouthType={mouth} eyebrowType={eyebrows} />
    </svg>
  );
};
