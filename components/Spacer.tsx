// @flow
import { ComponentType } from 'react';
import styled from 'styled-components';

import { spacer, SpacerTypes } from 'utils/size';

type Props = {
  paddingBottom?: SpacerTypes;
  width?: string;
};

const Spacer: ComponentType<Props> = styled.div`
  ${({ paddingBottom }: Props) =>
    paddingBottom ? `padding-bottom: ${paddingBottom};` : ''}
  ${({ width }: Props) => (width ? `width: ${width};` : '')}
`;

Spacer.displayName = 'Spacer';
Spacer.defaultProps = {
  paddingBottom: spacer,
  width: '100%',
};

export default Spacer;
