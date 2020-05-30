import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js'

const ReusablePieChart = ({ confirmed, recovered, deaths, title }) => {
    const canRef = useRef("");
    console.log(confirmed, recovered, deaths, title)
    useEffect(() => {
        async function setData() {
            const cntxt = canRef.current.getContext("2d");
            await new Chart(cntxt, {
                type: 'pie',
                data: {
                    labels: ["Confirmed", "Recovered", "Deaths"],
                    datasets: [
                        {
                            label: "Population (millions)",
                            backgroundColor: ['#ff5b4d', '#ffc816', '#00ac48'],
                            borderWidth: 0,
                            data: [confirmed, recovered, deaths]
                        },
                    ]
                },
                options: {
                    legend: {
                        display: false
                    },
                    responsive: true,
                    title: {
                        display: false,
                        text: title
                    },
                }
            });
        }
        setData();
    }, [confirmed, recovered, deaths, title]);
    return (
        <canvas ref={canRef} id='pie-chart' width='250' height='250' />
    );
}


export default ReusablePieChart;