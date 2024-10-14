import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Dashboard from '../Dashboard';

const mockStore = configureStore([]);

describe('Dashboard Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      dashboard: {
        data: {
          activeOrders: 10,
          monthlyRevenue: 5000,
          newClients: 3,
          chartData: [],
          recentOrders: []
        },
        loading: false,
        error: null
      },
      ui: {
        darkMode: false
      }
    });
  });

  test('renders dashboard title', () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  test('displays correct stats', () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('$5000')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});