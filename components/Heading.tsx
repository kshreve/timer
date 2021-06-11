import { FunctionComponent } from 'react';
import styled from 'styled-components';

import {
  fontSizeH1,
  fontSizeH2,
  fontSizeH3,
  fontSizeH4,
  fontSizeH5,
  fontSizeH6,
  lineHeightSmall,
} from 'utils/typography';
import theme from 'utils/theme';
import { spacer } from 'utils/size';

type AsType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
  children: any;
  as: AsType;
  align?: 'left' | 'center' | 'right';
  inverse?: boolean;
  noMargin?: boolean;
  uppercase?: boolean;
};

const renderFontSize = (as: AsType) => {
  let size;

  switch (as) {
    case 'h1':
      size = fontSizeH1;
      break;
    case 'h2':
      size = fontSizeH2;
      break;
    case 'h3':
      size = fontSizeH3;
      break;
    case 'h4':
      size = fontSizeH4;
      break;
    case 'h5':
      size = fontSizeH5;
      break;
    case 'h6':
      size = fontSizeH6;
      break;
    default:
      size = fontSizeH1;
      break;
  }

  return size;
};

const StyledHeading = styled.h1`
  font-weight: 700;
  line-height: ${lineHeightSmall};
  color: ${theme.colors.black};
  margin-bottom: ${(props: HeadingProps) => (props.noMargin ? '0' : spacer)};
  text-align: ${(props: HeadingProps) => props.align};
  white-space: pre-line;
  font-size: ${(props: HeadingProps) => renderFontSize(props.as)};
  text-transform: ${(props: HeadingProps) =>
    props.uppercase ? 'uppercase' : 'initial'};

  & div {
    display: inline;
  }
`;

const Heading: FunctionComponent<HeadingProps> = (props: HeadingProps) => (
  <StyledHeading
    as={props.as}
    noMargin={props.noMargin}
    inverse={props.inverse}
    align={props.align}
    uppercase={props.uppercase}
  >
    {props.children}
  </StyledHeading>
);
Heading.displayName = 'Heading';

export default Heading;
