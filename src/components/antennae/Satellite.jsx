import React from 'react'

export const Satellite = () => {
  return (
    <g className="Satellite" transform="translate(130,33)">
      <defs>
        <style>
          {'.satellite-class{fill:none;stroke:#414042;stroke-miterlimit:10;stroke-width:2px}'}
        </style>
      </defs>
      <g id="prefix__Layer_2" data-name="Layer 2">
        <g id="prefix__Layer_1-2" data-name="Layer 1">
          <g id="prefix__Layer_9" data-name="Layer 9">
            <path className="satellite-class" d="M20.14 23.69v12" />
            <path
              d="M5.78 29.07l-3.05.23L30.91 2.66l-.4 3A27 27 0 015.78 29.07z"
              fill="#6d6e71"
              strokeMiterlimit={10}
              strokeWidth={2}
              stroke="#414042"
            />
            <path className="satellite-class" d="M17.42 17.6l-4.08-4.17" />
            <circle
              cx={12.14}
              cy={12.69}
              r={2}
              stroke="#000"
              strokeMiterlimit={10}
              strokeWidth={2}
            />
          </g>
        </g>
      </g>
    </g>
  )
}
