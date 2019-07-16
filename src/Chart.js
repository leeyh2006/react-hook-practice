import {Bar} from "react-chartjs-2";
import React from "react";

const Chart =()=>{

    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    };

    return(
        <Bar data={data}></Bar>

    )
}

export default Chart;
