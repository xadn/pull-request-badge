import React from 'react';

class Badge extends React.Component {
  render() {
    return (
      <svg width="103" height="20">
        <linearGradient id="b" x2="0" y2="100%">
          <stop offset="0" stopSolor="#bbb" stopOpacity=".1" />
          <stop offset="1" stopOpacity=".1" />
        </linearGradient>

        <mask id="a">
          <rect width="103" height="20" rx="3" fill="#fff" />
        </mask>

        <g mask="url(#a)">
          <path fill="#555" d="M0 0h63v20H0z" />
          <path fill="#4c1" d="M63 0h40v20H63z" />
          <path fill="url(#b)" d="M0 0h103v20H0z" />
        </g>

        <g fill="#fff" textAnchor="middle" fontFamily="DejaVu Sans,Verdana,Geneva,sans-serif" fontSize="11">
          <text x="31.5" y="15" fill="#010101" fillOpacity=".3">
            tech debt
          </text>

          <text x="31.5" y="14">
            tech debt
          </text>

          <text x="82" y="15" fill="#010101" fillOpacity=".3">
            0.2%
          </text>

          <text x="82" y="14">
            0.2%
          </text>
        </g>
      </svg>
    );
  }
}

export default Badge;
