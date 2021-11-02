import React from 'react'

import { Default } from './Default'

export const EyeTypes = {
  default: <Default />,
}

export const Eyes = ({ type }) => {
  return <g id="Eyes">{type ? EyeTypes[type] : EyeTypes['default']}</g>
}
