import Head from 'next/head';
import { useState } from 'react';

import Container from 'components/grid/Container';
import Spacer from 'components/Spacer';
import CircularProgressBar from 'components/CircularProgressBar';
import useInterval from 'utils/useInterval';

const Index = () => {
  const [paused, setPaused] = useState(true);
  const [percentage, setPercentage] = useState(0);
  useInterval(
    () => {
      if (percentage < 100) {
        setPercentage(percentage + 20);
      } else {
        setPaused(true);
      }
    },
    paused ? null : 1000,
  )
  const playPauseButtonClick = () => {
    if(percentage===100) {
      setPercentage(0)
    }
    setPaused(!paused);
  };

  return (
    <>
      <Head>
        <title>Index</title>
      </Head>

      <Container>
        <Spacer />
        <CircularProgressBar width={100} height={100} percentage={percentage} />
        <button onClick={playPauseButtonClick}>{paused ? 'play': 'pause'}</button>
      </Container>
    </>
  );
};

Index.displayName = 'Index';

export default Index;
