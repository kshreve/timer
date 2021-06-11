import styled from 'styled-components';
import { breakpoints, halfSpacer, spacer } from 'utils/size';

const Layout = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  padding-right: ${halfSpacer};
  padding-left: ${halfSpacer};
  width: 100%;
  max-width: ${breakpoints.xl};

  @media only screen and (min-width: ${breakpoints.sm}) {
    padding-right: ${spacer};
    padding-left: ${spacer};
  }
`;
Layout.displayName = 'Layout';

export default Layout;
