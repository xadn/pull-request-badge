import React from 'react';

const WIDTH = 200;
// const WIDTH = 103;
const HEIGHT = 100;
// const HEIGHT = 20;
const LEFT_WIDTH = 60;
// const LEFT_WIDTH = 31.5;
const FONT_SIZE = 11;
const RIGHT_WIDTH = 150;
// const RIGHT_WIDTH = 82;

class Status extends React.Component {
  render() {
    return (
      <text x={60} y={this.props.y} fill='#010101' fillOpacity={1}>
        {this.props.context}
      </text>
    );
  }
}

class Badge extends React.Component {
  render() {
    const { owner, repo, statuses, pull, } = this.props;

    console.log('render', this.props)
        // <linearGradient id='b' x2={0} y2='100%'>
        //   <stop offset={0} stopSolor='#bbb' stopOpacity={.1} />
        //   <stop offset={1} stopOpacity={.1} />
        // </linearGradient>

        // <mask id='a'>
        //   <rect width={WIDTH} height={HEIGHT} rx={3} fill='#fff' />
        // </mask>

        // <g mask='url(#a)'>
        //   <path fill='#555' d='M0 0h63v20H0z' />
        //   <path fill='#4c1' d='M63 0h40v20H63z' />
        //   <path fill='url(#b)' d='M0 0h103v20H0z' />
        // </g>
          // <text x={LEFT_WIDTH} y={14}>
          //   Pull Request #{pull}
          // </text>
    return (
      <svg width={WIDTH} height={HEIGHT}>
        <g fill='#fff' textAnchor='middle' fontFamily='DejaVu Sans,Verdana,Geneva,sans-serif' fontSize={FONT_SIZE}>
          <text x={60} y={15} fill='#010101' fillOpacity={1}>
            Pull Request #{pull}
          </text>

          {statuses.map((status, i) => <Status {...status} key={status.context} y={40 + 20 * i} />)}
        </g>
      </svg>
    );
  }
}

export default Badge;
