import React from 'react';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Calendar = () => {
  return (
    <CalendarContainer>
      <Title>Calendario</Title>
      <p>Aquí irá el componente de calendario</p>
    </CalendarContainer>
  );
};

export default Calendar;