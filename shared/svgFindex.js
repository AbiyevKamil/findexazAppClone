import React from "react";
import { SvgXml } from "react-native-svg";
export default function SvgFindex() {
  const svgMarkup = `<?xml version="1.0" standalone="no"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
   "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
   width="110.000000pt" height="150.000000pt" viewBox="0 0 110.000000 150.000000"
   preserveAspectRatio="xMidYMid meet">
  <metadata>
  Created by potrace 1.16, written by Peter Selinger 2001-2019
  </metadata>
  <g transform="translate(0.000000,150.000000) scale(0.100000,-0.100000)"
  fill="#429bd5" stroke="none">
  <path d="M940 1220 c0 -6 -56 -10 -154 -10 -93 0 -157 -4 -161 -10 -3 -5 -22
  -10 -40 -10 -58 0 -134 -52 -186 -127 -34 -49 -37 -73 -9 -73 14 0 20 7 20 23
  0 23 72 99 117 125 16 8 85 12 239 12 240 0 243 -1 244 -66 0 -53 -34 -74
  -118 -74 -41 0 -72 -4 -72 -10 0 -6 -70 -10 -191 -10 -124 0 -188 -3 -184 -10
  10 -16 510 -13 537 3 45 25 68 62 68 110 0 18 -6 39 -12 47 -7 8 -3 6 10 -4
  12 -11 22 -14 22 -8 0 28 -22 62 -47 75 -41 20 -83 29 -83 17z"/>
  <path d="M565 780 c-4 -6 23 -10 74 -10 44 0 83 -4 86 -10 3 -5 40 -10 80 -10
  65 0 76 -3 85 -21 12 -21 5 -75 -13 -97 -29 -37 -67 -42 -341 -44 l-269 -3
  -19 -34 c-27 -47 -28 -144 -2 -172 10 -12 29 -25 41 -30 14 -5 20 -14 17 -22
  -6 -17 42 -27 72 -17 17 7 17 8 -4 14 -26 9 -20 26 9 26 28 0 80 56 108 115
  13 28 27 57 31 65 6 12 34 16 141 18 116 2 140 5 179 24 69 35 90 65 90 127 0
  34 -5 44 -33 65 -33 25 -39 26 -180 26 -86 0 -148 -4 -152 -10z m-97 -262 c4
  -31 -38 -99 -71 -117 -13 -7 -45 -11 -73 -9 l-49 3 -3 59 c-5 86 9 98 112 94
  80 -3 81 -3 84 -30z"/>
  </g>
  </svg>
  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="301px" />;

  return <SvgImage />;
}
