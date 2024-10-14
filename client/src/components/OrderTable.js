import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 0.5rem;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.background};
`;

const Td = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid ${props => props.theme.secondary};
`;

const OrderTable = ({ orders }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>ID</Th>
          <Th>Cliente</Th>
          <Th>Tipo</Th>
          <Th>Estado</Th>
          <Th>Fecha de entrega</Th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id}>
            <Td>{order.id}</Td>
            <Td>{order.client}</Td>
            <Td>{order.type}</Td>
            <Td>{order.status}</Td>
            <Td>{new Date(order.dueDate).toLocaleDateString()}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default OrderTable;