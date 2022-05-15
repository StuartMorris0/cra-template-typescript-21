import React from 'react';

import { Helmet } from 'react-helmet-async';

import App from 'components/App';

const Home = () => (
  <>
    <Helmet>
      <title>HomePage</title>
    </Helmet>
    <App />
  </>
);
export default Home;
