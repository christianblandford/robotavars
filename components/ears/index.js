import React from 'react'

import { Default } from './Default'

export const EarTypes = {
  default: <Default />,
}

export const Ears = ({ type }) => {
  return <g id="Ears">{type ? EarTypes[type] : EarTypes['default']}</g>
}
