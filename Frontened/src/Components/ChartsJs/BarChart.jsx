import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function BarChart() {
    // console.log(updatedChartJsData);
    // console.log(updatedChartJsData.map((item) => item.date));

    const [barChart, setBarChart] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Data 2',
                data: [5, 10, 8, 15, 12, 18],
                fill: true,
                backgroundColor: 'rgba(53, 188, 135, 0.37)',
                borderColor: '#006428',
                pointBackgroundColor: 'lightGreen',
                pointBorderColor: 'green',
                pointHoverBackgroundColor: 'lightGreen',
                pointHoverBorderColor: 'black',
                tension: 0.3,// Adjust the tension value for a smooth stroke
            },
            {
                label: 'Data 1',
                data: [10, 20, 15, 25, 20, 30],
                fill: true,
                backgroundColor: 'rgba(40, 58, 121, 0.47)',
                borderColor: '#283a79',
                pointBackgroundColor: 'rgba(75,192,192,1)',
                pointBorderColor: '#283a79',
                pointHoverBackgroundColor: '#046F79',
                pointHoverBorderColor: 'black',
                tension: 0.3,// Adjust the tension value for a smooth stroke
            },

        ],
    });

    const options = {
        plugins: {
            legend: {
                position: 'bottom', // Move the dataset labels to the bottom
                labels: {
                    font: {
                        weight: '700', // Increase the font weight of the legend text
                        size: '14px',
                        family: 'Arial, sans-serif', // Change the font family for the x-axis labels
                    },
                    color: 'black', // Change the color of the legend text
                },
            },
        },
        elements: {
            line: {
                borderWidth: 3, // Increase the width of the line
            },
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        weight: 'bold', // Increase the font weight of the x-axis labels
                        size: '12px',
                        family: 'Arial, sans-serif', // Change the font family for the x-axis labels
                    },
                    color: 'black', // Change the color of the x-axis labels
                },
            },
            y: {
                ticks: {
                    font: {
                        weight: 'bold', // Increase the font weight of the y-axis labels
                        size: '12px'
                    },
                    color: 'black', // Change the color of the y-axis labels
                },
            },
        },
    };
    return (
        <>
            <div className="">
                <div className="chart-container" style={{height:'280px'}}>
                    <Bar data={barChart} options={options} />
                </div>
            </div>

        </>
    );
}

export default BarChart;