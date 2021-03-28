import React from 'react';

import logo from 'assets/images/logo.svg';

import { StyledImage, StyledWrapper } from './App.styles';

const App: React.FC = () => {
  const spinTransitionFineTuned = {
    rotate: {
      repeat: Infinity,
      ease: 'linear',
      duration: 1,
    },
    scale: {
      repeatType: 'loop',
      duration: 2,
    },
  };
  return (
    <StyledWrapper>
      <header className="App-header">
        <StyledImage src={logo} alt="logo" animate={{ scale: [1, 1.2, 1.2, 1, 1], rotate: [0, 0, 270, 270, 0] }} transition={spinTransitionFineTuned} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </StyledWrapper>
  );
};

export default App;
