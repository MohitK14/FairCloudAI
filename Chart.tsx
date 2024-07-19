import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import React from 'react';

const Chart= ()=>{

    const data = {
        labels: ['Approved', 'Unapproved'],
        datasets: [
          {
            label: 'Savings Summary',
            data: [1091994, 80102],
            backgroundColor: ['#00ff00', '#ff6347'],
            hoverOffset: 4,
          },
        ],
      };

    return (
        <>
            <Pie data={data} />
        </>
    )
}

export default Chart;