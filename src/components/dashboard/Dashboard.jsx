import React from "react";
import { Routes, Route } from "react-router-dom";


import Analytic from "../analytic/Analytic";
import Balance from "../balance/Balance"

import './Dashboard.css'

function Dashboard() {
  return (
    <div className="main-section-dashboard">
      <div className="grid">
       
        <Analytic />
        <Balance />
       
      </div>
    </div>
  );
}

export default Dashboard;
