import { ComponentType } from 'react';
import styled from 'styled-components';

import { SpacerTypes } from 'utils/size';
import DirectionTypes from 'types/directionTypes';

type FlexTypes =
  | 'center'
  | 'start'
  | 'stretch'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

type FlexContainerProps = {
  children: any;

  position?: 'relative' | 'fixed' | 'absolute';
  direction?: DirectionTypes;
  wrap?: 'wrap' | 'nowrap';
  justify?: FlexTypes;
  align?: FlexTypes;
  alignContent?: FlexTypes;
  fullHeight?: boolean;
  fullWidth?: boolean;
  padding?: SpacerTypes;
  as?: string;
};

const FlexContainer: ComponentType<FlexContainerProps> = styled.div`
  display: flex;
  max-width: 100%;
  align-items: ${({ align }: FlexContainerProps) => align};
  justify-content: ${({ justify }: FlexContainerProps) => justify};
  flex-wrap: ${({ wrap }: FlexContainerProps) => wrap};
  flex-direction: ${({ direction }: FlexContainerProps) => direction};
  align-content: ${({ alignContent }: FlexContainerProps) => alignContent};

  ${({ fullHeight }: FlexContainerProps) => (fullHeight ? 'height: 100%;' : '')}
  ${({ fullWidth }: FlexContainerProps) => (fullWidth ? 'width: 100%;' : '')}
  ${({ position }: FlexContainerProps) =>
    position ? `position: ${position};` : ''}
  ${({ padding }: FlexContainerProps) =>
    padding ? `padding: ${padding};` : ''}
`;

FlexContainer.defaultProps = {
  direction: 'row',
  justify: 'center',
  align: 'center',
  wrap: 'wrap',
  alignContent: 'stretch',
  fullHeight: true,
  fullWidth: false,
  padding: undefined,
};
FlexContainer.displayName = 'FlexContainer';

export default FlexContainer;
