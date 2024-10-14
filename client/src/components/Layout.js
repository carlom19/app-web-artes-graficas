import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  padding: 2rem;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Navigation />
      <Content>{children}</Content>
    </LayoutContainer>
  );
};

export default Layout;