import React from 'react';
import styled from 'styled-components';

const AnalysisContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Analysis = () => {
  return (
    <AnalysisContainer>
      <Title>Análisis</Title>
      <p>Aquí irán los gráficos y análisis detallados</p>
    </AnalysisContainer>
  );
};

export default Analysis;