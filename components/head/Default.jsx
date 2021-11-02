import React from 'react'
import { HeadShadow } from './headShadow'

export const Default = () => {
  return (
    <g transform="translate(84, 68)">
      <HeadShadow x={40} y={145} />
      <path
        d="M131 54c0-24.33-28.55-53-64.44-53S1 29.65 1 54v80.78A11.17 11.17 0 0012.11 146h107.78A11.17 11.17 0 00131 134.76z"
        fill="#a2a1a1"
        stroke="#414042"
        strokeMiterlimit={10}
        strokeWidth={2}
        data-name="Layer 1"
      />
    </g>
  )
}
