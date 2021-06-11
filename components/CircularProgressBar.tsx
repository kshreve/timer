// @flow
import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import usePrevious from 'utils/usePrevious';

const grey = '#d4d4d4';
const black = '#000000';

type Props = {
  width: number;
  height: number;
  percentage: number;
};

type ProgressProps = {
  startLength?: number;
  fillLength: number;
  circumference: number;
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
    stroke-dasharray: ${props.startLength},${props.circumference};
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
      ${load(props)} 1s
    `};
  transform: rotate(-90deg);
  transform-origin: center;
  stroke-dasharray: ${(props: ProgressProps) =>
    `${props.fillLength},${props.circumference}`};
  stroke: ${black};
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

const CircularProgressBar = ({ height, percentage, width }: Props) => {
  const previousPercentage = usePrevious(percentage);
  const strokeWidth = 10;
  // SvgContainer centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (width - strokeWidth) / 2;
  // Enclose circle in a circumscribing square
  const viewBox = `0 0 ${width} ${height}`;
  const circumference = Math.PI * radius * 2;
  const startLength = previousPercentage
    ? (previousPercentage / 100) * circumference
    : 0;
  const fillLength = (percentage / 100) * circumference;

  return (
    // @ts-ignore
    <SvgContainer width={width} height={height} viewBox={viewBox}>
      <CircleBackground
        cx={width / 2}
        cy={height / 2}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <CircleProgress
        cx={width / 2}
        cy={height / 2}
        r={radius}
        strokeWidth={strokeWidth}
        startLength={startLength}
        fillLength={fillLength}
        circumference={circumference}
      />
      <Text dx={`${width / 2}px`} dy={`${height / 2}px`}>
        {percentage}
        <TSpan dy="-5">%</TSpan>
      </Text>
    </SvgContainer>
  );
};

export default CircularProgressBar;
