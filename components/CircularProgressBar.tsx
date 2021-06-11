// @flow
import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';

import shadeBlend from 'utils/shadeBlend';

const grey = 'rgba(186,186,186,0.42)';
const black ='#000000';

type brandGradientType = {
  offset:string,
  color: string,
}

export const brandGradient:Array<brandGradientType> = [
  {
    offset: '0%',
    color: grey,
  },
  {
    offset: '20%',
    color: shadeBlend(0.2, grey, black),
  },
  {
    offset: '35%',
    color: shadeBlend(0.35, grey, black),
  },
  {
    offset: '40%',
    color: shadeBlend(0.4, grey, black),
  },
  {
    offset: '50%',
    color: shadeBlend(0.5, grey, black),
  },
  {
    offset: '55%',
    color: shadeBlend(0.55, grey, black),
  },
  {
    offset: '60%',
    color: shadeBlend(0.6, grey, black),
  },
  {
    offset: '65%',
    color: shadeBlend(0.65, grey, black),
  },
  {
    offset: '80%',
    color: shadeBlend(0.8, grey, black),
  },
  {
    offset: '100%',
    color: black,
  },
];

type Props = {
  width: number,
  height: number,
  percentage: number,
};

type ProgressProps = {
  fillLength: number,
  circumference: number,
};

type State = {
  randomId: string,
};

const SvgContainer = styled.svg`
  width: ${(props: Props) => props.width}px;
  height: ${(props: Props) => props.height}px;
`;

const Circle = styled.circle`
  fill: none;
`;

const CircleBackground = styled.circle`
  stroke: ${grey};
  fill: none;
`;

const load = (props: ProgressProps) => keyframes`
  from {
    stroke-dasharray: 0,${props.circumference};
  }
  to {
    stroke-dasharray:${props.fillLength},${props.circumference};
  }
`;

const CircleProgress = styled(Circle)`
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: ${(props: ProgressProps) =>
  css`
      ${load(props)} 5s
    `};
  transform: rotate(-90deg);
  transform-origin: center;
  stroke-dasharray: ${(props: ProgressProps) => `${props.fillLength},${props.circumference}`};
`;

const Text = styled.text`
  font-size: 25px;
  dominant-baseline: central;
  fill: ${black};
  text-anchor: middle;
`;

const TSpan = styled.tspan`
  font-size: 15px;
`;

class CircularProgressBar extends Component<Props, State> {
  state = {
    randomId: (Math.random() + 1).toString(36).substr(2, 8),
  };

  render() {
    const {
      height,
      percentage,
      width,
    } = this.props;
    const { randomId } = this.state;
    const strokeWidth= 10;
    // SvgContainer centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (width - strokeWidth) / 2;
    // Enclose circle in a circumscribing square
    const viewBox = `0 0 ${width} ${height}`;
    const circumference = Math.PI * radius * 2;
    const fillLength = (percentage / 100) * circumference;

    return (
      // @ts-ignore
      <SvgContainer width={width} height={height} viewBox={viewBox}>
        <defs>
          <linearGradient
            id={randomId}
            gradientUnits="objectBoundingBox"
            x1="1"
            x2="0"
            y1="0"
            y2="1"
          >
            {brandGradient.map((gradient:brandGradientType) => (
              <stop
                key={gradient.offset}
                stopOpacity={gradient.offset}
                offset={gradient.offset}
                stopColor={gradient.color || ''}
              />
            ))}
          </linearGradient>
        </defs>
        <CircleBackground cx={width / 2} cy={height / 2} r={radius} strokeWidth={strokeWidth} />
        <CircleProgress
          stroke={`url(#${randomId})`}
          cx={width / 2}
          cy={height / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fillLength={fillLength}
          circumference={circumference}
        />
        <Text
          dx={`${width/2}px`}
          dy={`${height/2}px`}
        >
          {percentage}
          <TSpan dy="-5">%</TSpan>
        </Text>
      </SvgContainer>
    );
  }
}

export default CircularProgressBar;
