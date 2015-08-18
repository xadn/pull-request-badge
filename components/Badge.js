import React from 'react';

const WIDTH = 200;
// const WIDTH = 103;
const HEIGHT = 40;
// const HEIGHT = 20;
const LEFT_WIDTH = 60;
// const LEFT_WIDTH = 31.5;
const FONT_SIZE = 11;
const RIGHT_WIDTH = 150;
// const RIGHT_WIDTH = 82;

class Badge extends React.Component {
  render() {
    const { owner, repo, statuses, pull, } = this.props;
    return (
      <svg width={WIDTH} height={HEIGHT}>
        <linearGradient id='b' x2={0} y2='100%'>
          <stop offset={0} stopSolor='#bbb' stopOpacity={.1} />
          <stop offset={1} stopOpacity={.1} />
        </linearGradient>

        <mask id='a'>
          <rect width={WIDTH} height={HEIGHT} rx={3} fill='#fff' />
        </mask>

        <g mask='url(#a)'>
          <path fill='#555' d='M0 0h63v20H0z' />
          <path fill='#4c1' d='M63 0h40v20H63z' />
          <path fill='url(#b)' d='M0 0h103v20H0z' />
        </g>

        <g fill='#fff' textAnchor='middle' fontFamily='DejaVu Sans,Verdana,Geneva,sans-serif' fontSize={FONT_SIZE}>
          <text x={LEFT_WIDTH} y={15} fill='#010101' fillOpacity={.3}>
            Pull Request #{pull}
          </text>

          <text x={LEFT_WIDTH} y={14}>
            Pull Request #{pull}
          </text>

          <text x={RIGHT_WIDTH} y={15} fill='#010101' fillOpacity={.3}>
            0.2%
          </text>

          <text x={RIGHT_WIDTH} y={14}>
            0.2%
          </text>
        </g>
      </svg>
    );
  }
}

export default Badge;
