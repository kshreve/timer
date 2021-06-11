import styled from 'styled-components';

import { spacer } from 'utils/size';
import theme from 'utils/theme';

const Footer = styled.footer`
  border-top: 1px solid ${theme.colors.black};
  margin-top: ${spacer};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
Footer.displayName = 'Footer';

export default Footer;
