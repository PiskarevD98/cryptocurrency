import {LineChart } from '@jhonnold/react-chart.js';
import { useEffect, useState } from 'react';
import { usePrices } from '../hooks/Secondhook';


const Line = () =>  {
    const {prices} = usePrices()
    const [data, setData] = useState({})
    const [options, setOptions] = useState({})
    useEffect(() => {
    if(!prices[0]?.priceUsd ) {
        return
    }

    setData({
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', ],
        datasets: [
            {
                label: 'Price for the last 7 days in $',
                data: [prices[355].priceUsd, prices[356].priceUsd, prices[357].priceUsd, prices[358].priceUsd, prices[359].priceUsd, prices[360].priceUsd, prices[361].priceUsd, prices[362].priceUsd], 
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                
            },
        ],
    }) 
   
    setOptions({
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: false,
                    },
                },
            ],
        },
    }) 
},[prices])
    return (
        <>
       <LineChart data={data} options={options} type="bar" />
       </>
    )
    }
    
export default Line;