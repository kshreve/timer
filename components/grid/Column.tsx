import styled from 'styled-components';
import { breakpoints, halfSpacer } from 'utils/size';

type allowedNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ColumnProps = {
  xs?: allowedNumbers;
  sm?: allowedNumbers;
  md?: allowedNumbers;
  lg?: allowedNumbers;
  xl?: allowedNumbers;
  xsOffset?: allowedNumbers;
  smOffset?: allowedNumbers;
  mdOffset?: allowedNumbers;
  lgOffset?: allowedNumbers;
  xlOffset?: allowedNumbers;
};

const createColumnSpan = (breakpoint: number) => `
  width: ${(breakpoint / 12) * 100}%;
  margin-left: 0;
`;

const createColumnOffset = (breakpoint: number) =>
  `margin-left: ${(breakpoint / 12) * 100}%;`;

const Column = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: ${halfSpacer};
  padding-left: ${halfSpacer};
  flex: 0 0 auto;

  ${(props: ColumnProps) =>
    props.xs ? createColumnSpan(props.xs) : 'width: 100%'};
  ${(props: ColumnProps) =>
    props.xsOffset && createColumnOffset(props.xsOffset)};

  @media only screen and (min-width: ${breakpoints.sm}) {
    ${(props: ColumnProps) => props.sm && createColumnSpan(props.sm)};
    ${(props: ColumnProps) =>
      props.smOffset && createColumnOffset(props.smOffset)};
  }

  @media only screen and (min-width: ${breakpoints.md}) {
    ${(props: ColumnProps) => props.md && createColumnSpan(props.md)};
    ${(props: ColumnProps) =>
      props.mdOffset && createColumnOffset(props.mdOffset)};
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    ${(props: ColumnProps) => props.lg && createColumnSpan(props.lg)};
    ${(props: ColumnProps) =>
      props.lgOffset && createColumnOffset(props.lgOffset)};
  }

  @media only screen and (min-width: ${breakpoints.xl}) {
    ${(props: ColumnProps) => props.xl && createColumnSpan(props.xl)};
    ${(props: ColumnProps) =>
      props.xlOffset && createColumnOffset(props.xlOffset)};
  }
`;
Column.displayName = 'Column';

export default Column;
