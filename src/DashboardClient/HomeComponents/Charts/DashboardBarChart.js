import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useColorModeValue } from '../../../Components/ui/color-mode';


const DashboardBarChart = ({ data = [], colors, height = 250 }) => {
  const textColor = useColorModeValue('gray.600', 'white');
  const gridColor = useColorModeValue('gray.200', '#1a1a1a');

  const options = {
    chart: {
      type: 'bar',
      stacked: data[0]?.value2 ? true : false,
      toolbar: {
        show: false,
      },
    },
    colors: [ colors || '#3B82F6', '#6366F1'],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        borderRadiusApplication: 'end',
        columnWidth: '30px',
        style: {
          fontFamily: 'Outfit'
        }
      },
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
          fontSize: '12px',
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

  const series = data[0]?.value2 ? [
    {
      name: 'Série 1',
      data: data.map(item => item.value),
    },
    {
      name: 'Série 2',
      data: data.map(item => item.value2 || 0),
    },
  ] : [
    {
      name: 'Valeur',
      data: data.map(item => item.value),
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="bar"
      height={height}
    />
  );
};

export default DashboardBarChart;



