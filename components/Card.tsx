import styled from 'styled-components';
import { ComponentType } from 'react';
import { color, ColorProps } from 'styled-system';

import { doubleSpacer } from 'utils/size';

const Card: ComponentType<ColorProps & {}> = styled.div`
  ${color}
  padding: ${doubleSpacer};
  border: 1px solid grey;
`;

Card.displayName = 'Card';

export default Card;
