import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';

function ChartJs() {
    const [pieChart, setPieChart] = useState({
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(255, 0, 0, 0.5)',    // Red with 50% opacity
                    'rgba(0, 0, 255, 0.5)',    // Blue with 50% opacity
                    'rgba(255, 255, 0, 0.5)',  // Yellow with 50% opacity
                    'rgba(0, 255, 0, 0.5)',    // Green with 50% opacity
                    'rgba(128, 0, 128, 0.5)',  // Purple with 50% opacity
                  ],
                borderColor: 'black',
                borderWidth: 0.1,
            },
        ],
    });

    const options = {
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        weight: '700',
                        size: '14px',
                        family: 'Arial, sans-serif',
                    },
                    color: 'black',
                },
            },
        },
        elements: {
            arc: {
                borderWidth: 1,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
        },
        animation: {
            animateRotate: true,
            animateScale: true,
        },
        cutout: '75%',// Adjust the size of the pie chart by specifying the cutout percentage
    };

    return (
        <div className="">
            <div className="chart-container" style={{ height: '300px' }}>
                <Pie data={pieChart} options={options} />
            </div>
        </div>
    );
}

export default ChartJs;
