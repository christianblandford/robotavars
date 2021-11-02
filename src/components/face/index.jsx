import React from 'react'
import { Goggles } from '../goggles'
import { Eyes } from '..'
import { Mouth } from '..'

export const Face = ({ eyeType, mouthType, eyebrowType, accessoryType }) => {
  return (
    <g id="Face">
      {/* 'Goggles' aka shape behind the eyes */}
      <Goggles />

      {/* Eyes */}
      <Eyes type={eyeType} />

      {/* Mouth */}
      <Mouth type={mouthType} />
    </g>
  )
}
