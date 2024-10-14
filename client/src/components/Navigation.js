import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../slices/uiSlice';

const Nav = styled.nav`
  background-color: ${props => props.isDarkMode ? '#1a202c' : '#ffffff'};
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${props => props.isDarkMode ? '#e2e8f0' : '#4a5568'};
  margin-right: 1rem;
  text-decoration: none;
  &:hover {
    color: #3182ce;
  }
`;

const Button = styled.button`
  background-color: #3182ce;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: #2c5282;
  }
`;

const Navigation = () => {
  const isDarkMode = useSelector(state => state.ui.darkMode);
  const dispatch = useDispatch();

  return (
    <Nav isDarkMode={isDarkMode}>
      <NavContainer>
        <div role="navigation" aria-label="Navegación principal">
          <NavLink to="/" isDarkMode={isDarkMode}>Dashboard</NavLink>
          <NavLink to="/orders" isDarkMode={isDarkMode}>Órdenes</NavLink>
          <NavLink to="/calendar" isDarkMode={isDarkMode}>Calendario</NavLink>
          <NavLink to="/analysis" isDarkMode={isDarkMode}>Análisis</NavLink>
        </div>
        <div>
          <Button 
            onClick={() => dispatch(toggleDarkMode())}
            aria-label={isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
          >
            {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
          </Button>
        </div>
      </NavContainer>
    </Nav>
  );
};

export default Navigation;