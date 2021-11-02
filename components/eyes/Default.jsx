import React from 'react'

export const Default = () => {
  return (
    <g>
      <defs>
        <style>{'.eye{fill:#231f20}'}</style>
      </defs>
      <g transform="translate(129, 127)">
        <circle className="eye" cx={4} cy={0} r={4} />
        <circle className="eye" cx={36} cy={0} r={4} />
      </g>
    </g>
  )
}
