import styled from 'styled-components';
import DirectionTypes from 'types/directionTypes';
import { halfSpacer } from 'utils/size';

type RowProps = {
  direction?: DirectionTypes;
};

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -${halfSpacer};
  margin-left: -${halfSpacer};
  flex-direction: ${({ direction }: RowProps) => direction};
`;

Row.displayName = 'Row';

Row.defaultProps = {
  direction: 'row',
};

export default Row;
