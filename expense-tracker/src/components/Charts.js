import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Row, Col } from 'reactstrap';


ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Charts = ({ income, expenses }) => {
  const pieData = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        data: [income, expenses],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  const barData = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        label: 'Amount',
        data: [income, expenses],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Row>
      <Col xs="6">
        <div style={{ height: '300px' }}>
          <h4>Pie Chart</h4>
          <Pie data={pieData} options={options} />
        </div>
      </Col>
      <Col xs="6">
        <div style={{ height: '300px' }}>
          <h4>Bar Chart</h4>
          <Bar data={barData} options={options} />
        </div>
      </Col>
    </Row>
  );
};

export default Charts;