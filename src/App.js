import React from "react";

import styled from "styled-components";
import Sidebar from "./components/sidebar/Sidebar";

import Dashboard from "./components/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Payment from "./components/payment/Payment";
import Balance from "./components/balance/Balance"

function App() {
  return (
    <Div>
      <Sidebar />
    
      {/* <Dashboard /> */}

      <Routes>
        <Route path="/payment" element={<Payment />} />
        <Route path = "/dashboard" element ={<Dashboard />} />

      </Routes>
    </Div>
  );
}

export default App;
const Div = styled.div`
  position: relative;
`;
