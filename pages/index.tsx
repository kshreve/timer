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
      const newPercentage = percentage + 20;
      if (newPercentage < 100) {
        setPercentage(newPercentage);
      } else if (newPercentage === 100) {
        setPercentage(newPercentage);
        setPaused(true);
      }
    },
    paused ? null : 1000
  );
  const playPauseButtonClick = () => {
    if (percentage === 100) {
      setPercentage(0);
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
        <div onClick={playPauseButtonClick}>
          <CircularProgressBar
            width={100}
            height={100}
            percentage={percentage}
          />
        </div>
        {percentage !== 100 && <p>{paused ? 'paused' : 'playing'}</p>}
        {percentage === 100 && <p>complete</p>}
      </Container>
    </>
  );
};

Index.displayName = 'Index';

export default Index;
