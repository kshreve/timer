import Head from 'next/head';

import Container from 'components/grid/Container';
import Spacer from 'components/Spacer';
import CircularProgressBar from "components/CircularProgressBar";

const Index = () => {

  return (
    <>
      <Head>
        <title>Index</title>
      </Head>

      <Container>
        <Spacer />
        <CircularProgressBar width={100} height={100} percentage={100}/>
      </Container>
    </>
  );
};

Index.displayName = 'Index';

export default Index;
