import React from "react";

import { Default } from "./Default";
import { Snoo } from "./Snoo";
import { RabbitEars } from "./RabbitEars";
import { Bender } from "./Bender";
import { Shrek } from "./Shrek";
import { Satellite } from "./Satellite";
import { Calculon } from "./Calculon";

export const AntennaTypes = {
  default: <Default />,
  snoo: <Snoo />,
  rabbitEars: <RabbitEars />,
  bender: <Bender />,
  shrek: <Shrek />,
  satellite: <Satellite />,
  calculon: <Calculon />,
};

export const Antenna = ({ type }) => {
  return (
    <g id="Antenna">{type ? AntennaTypes[type] : AntennaTypes["default"]}</g>
  );
};
