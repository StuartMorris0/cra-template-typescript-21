import React from 'react';

import { Link, Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import usePageViews from 'hooks/usePageViews';
import Counter from 'pages/counter';
import Home from 'pages/home';
import NotFoundPage from 'pages/notfound';

const StyledNav = styled.nav`
  display: flex;
`;

const StyledLink = styled(Link)`
  padding: 16px;
  background: #3a4e75;
  color: white;
  text-decoration: none;
  margin-right: 8px;
`;

const AppRouterSwitch: React.FC = () => {
  usePageViews();
  return (
    <div>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/counter">Counter</StyledLink>
        <StyledLink to="/does-not-exist">NotFound</StyledLink>
      </StyledNav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/counter" component={Counter} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
};

export default AppRouterSwitch;
