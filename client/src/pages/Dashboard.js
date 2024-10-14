import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchDashboardData } from '../slices/dashboardSlice';
import DashboardChart from '../components/DashboardChart';
import OrderTable from '../components/OrderTable';
import LoadingSpinner from '../components/LoadingSpinner';

const DashboardContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background-color: ${props => props.isDarkMode ? '#2d3748' : '#ffffff'};
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.dashboard);
  const isDarkMode = useSelector(state => state.ui.darkMode);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;

  return (
    <DashboardContainer>
      <Title>Dashboard</Title>
      <StatsContainer>
        <StatCard isDarkMode={isDarkMode}>
          <h2>Órdenes Activas</h2>
          <p>{data.activeOrders}</p>
        </StatCard>
        <StatCard isDarkMode={isDarkMode}>
          <h2>Ingresos del Mes</h2>
          <p>${data.monthlyRevenue}</p>
        </StatCard>
        <StatCard isDarkMode={isDarkMode}>
          <h2>Clientes Nuevos</h2>
          <p>{data.newClients}</p>
        </StatCard>
      </StatsContainer>
      <DashboardChart data={data.chartData} />
      <OrderTable orders={data.recentOrders} />
    </DashboardContainer>
  );
};

export default Dashboard;