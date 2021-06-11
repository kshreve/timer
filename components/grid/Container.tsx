import styled from 'styled-components';

import { breakpoints, spacer } from 'utils/size';

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: ${spacer};
  padding-left: ${spacer};
  max-width: ${breakpoints.xl};

  align-self: center;
  // Note: fix for IE11 inside flex container;
`;
Container.displayName = 'Container';

export default Container;
