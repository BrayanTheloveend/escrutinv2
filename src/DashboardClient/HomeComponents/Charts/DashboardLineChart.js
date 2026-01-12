import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useColorModeValue } from '../../../Components/ui/color-mode';


const DashboardLineChart = ({ data = [], data2 = [], height = 250 }) => {
  const textColor = useColorModeValue('gray.600', 'white');
  const gridColor = useColorModeValue('gray.200', '#1a1a1a');

  const options = {
    chart: {
      type: 'line',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: ['#3B82F6', '#f7762cff'],
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    grid: {
      borderColor: gridColor,
      strokeDashArray: 4,
    },
    xaxis: {
      categories: data.map(item => item.label),
      labels: {
        style: {
          colors: textColor,
          fontFamily: 'Outfit',
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: textColor,
          fontFamily: 'Outfit',
          fontSize: '8px',
        },
        formatter: (value) => {
          return value.toLocaleString('fr-FR');
        },
      },
    },
    tooltip: {
      theme: useColorModeValue('light', 'dark'),
      style: {
        fontFamily: 'Outfit',
      },
    },
    legend: {
      show: false,
    },
  };

  const series = data2 && data2.length > 0 ? [
    {
      name: 'Série 1',
      data: data.map(item => item.value),
    },
    {
      name: 'Série 2',
      data: data2.map(item => item.value),
    },
  ] : [
    {
      name: 'Revenus',
      data: data.map(item => item.value),
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={height}
    />
  );
};

export default DashboardLineChart;



