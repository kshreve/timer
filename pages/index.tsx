import Head from 'next/head';
import useSWR from 'swr';
import Link from 'next/link';

import Container from 'components/grid/Container';
import FlexContainer from 'components/FlexContainer';
import Spacer from 'components/Spacer';
import fetcher from 'utils/fetcher';
import { getCanonicalUrlFromUser } from 'lib/users';

import UserType from 'types/userType';

const Index = () => {
  const { data, error } = useSWR('/api/users', fetcher);

  return (
    <>
      <Head>
        <title>Index</title>
      </Head>

      <Container>
        <Spacer />
        <FlexContainer>Look at our Great Users</FlexContainer>
        <div>
          {error && <div>failed to load users</div>}
          {!data && <div>Loading users...</div>}
          {data?.map((user: UserType) => (
            <div key={user.name}>
              <Link href={getCanonicalUrlFromUser(user)}>{user.name}</Link>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

Index.displayName = 'Index';

export default Index;
