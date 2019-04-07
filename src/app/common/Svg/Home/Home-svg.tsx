import React, { FunctionComponent } from 'react';

interface IProps {
  color?: string;
  className?: string;
}

const CommonHomeIcon: FunctionComponent<IProps> = ({ color, ...rest }) => (
  <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" {...rest}>
    <defs>
      <path
        d="M23.3660625,24.84375 L7.4998125,24.84375 L7.4998125,12.519375 L15.4329375,5.908125 L23.3660625,12.519375 L23.3660625,24.84375 Z M16.033875,3.9665625 C15.6860625,3.6778125 15.18075,3.6778125 14.832,3.9665625 L5.9623125,11.35875 C5.7485625,11.5378125 5.6248125,11.80125 5.6248125,12.0796875 L5.6248125,25.78125 C5.6248125,26.2996875 6.043875,26.71875 6.5623125,26.71875 L24.3035625,26.71875 C24.822,26.71875 25.2410625,26.2996875 25.2410625,25.78125 L25.2410625,12.0796875 C25.2410625,11.80125 25.1173125,11.5378125 24.9045,11.35875 L16.033875,3.9665625 Z M9.3346875,20.9765625 C9.3346875,21.495 9.75375,21.9140625 10.2721875,21.9140625 L20.5940625,21.9140625 C21.1125,21.9140625 21.5315625,21.495 21.5315625,20.9765625 C21.5315625,20.458125 21.1125,20.0390625 20.5940625,20.0390625 L10.2721875,20.0390625 C9.75375,20.0390625 9.3346875,20.458125 9.3346875,20.9765625"
        id="path-1"
      />
    </defs>
    <g
      id="Design-System"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g id="03-Icons" transform="translate(-250.000000, -265.000000)">
        <g id="01-Icon/032Home" transform="translate(250.000000, 265.000000)">
          <mask id="mask-2" fill="white">
            <use href="#path-1" />
          </mask>
          <use id="Fill-1" fill="#000000" fillRule="evenodd" href="#path-1" />
          <g
            id="00-Tint/10Black"
            mask="url(#mask-2)"
            fill="#262424"
            fillRule="evenodd"
          >
            <rect
              id="Rectangle-4-Copy-2"
              x="0"
              y="0"
              width="30.0986842"
              height="30.0986842"
            />
            <rect
              id="Rectangle-4-Copy-2"
              x="0"
              y="0"
              width="30.0986842"
              height="30.0986842"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default CommonHomeIcon;
