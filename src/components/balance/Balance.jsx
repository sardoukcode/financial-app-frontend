import React from 'react'
import { Chart } from "react-google-charts";
import "./Balance.css";

export const data = [
  ["FIX expenses", "variable expenses"],
  ["fix", 33],
  ["variable", 26],
 
];

export const options = {
  title: "Expenses past 30 days",
  sliceVisibilityThreshold: 0.2, // 20%
};

function Balance() {
    return(
    <div className='Main-page-balance balance-flex'>
    <div className="sales balance-flex">
       
        <div className="expenses__graph balance-flex">
        <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"260px"}
      height={"260px"}
      style={{ borderRadius: '1rem' }}

    />
 


        </div>
    </div>
    </div>

);
}


export default Balance




