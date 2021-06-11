import UserType from 'types/userType';
import Head from 'next/head';
import styled from 'styled-components';

import { getCanonicalUrlFromUser } from 'lib/users';
import Avatar from 'components/Avatar';
import Container from 'components/grid/Container';
import FlexContainer from 'components/FlexContainer';
import Spacer from 'components/Spacer';
import { halfSpacer } from 'utils/size';
import theme from 'utils/theme';

const AvatarWrapper = styled.div`
  border: ${halfSpacer} solid ${theme.colors.white};
  box-shadow: 0 0 0 3px #e78267;
  border-radius: 50%;
`;

const Links = ({ user, user: { username, name } }: { user: UserType }) => (
  <>
    <Head>
      <title>{name} - Links</title>
      <link rel="canonical" href={getCanonicalUrlFromUser(user)} />
    </Head>

    <Container>
      <FlexContainer>
        <AvatarWrapper>
          <Avatar user={user} />
        </AvatarWrapper>
      </FlexContainer>
      <Spacer />
      <FlexContainer>
        {username} - {name}
      </FlexContainer>
    </Container>
  </>
);

Links.displayName = 'Links';

export default Links;
