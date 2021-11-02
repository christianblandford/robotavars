import React from 'react'
import { Default } from './Default'
import { LongNeck } from './LongNeck'
import { Sharp } from './Sharp'

export const HeadTypes = {
  default: <Default />,
  longNeck: <LongNeck />,
  sharp: <Sharp />,
}

export const Head = ({ type }) => {
  return <g id="Head">{type ? HeadTypes[type] : HeadTypes['default']}</g>
}
