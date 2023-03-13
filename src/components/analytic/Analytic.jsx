import React from "react";
// import { Link } from 'react-router-dom';
// import styled from "styled-components";
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineMore } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";

import { GiTakeMyMoney } from "react-icons/gi";
import "./Analytic.css"

function Analytic() {
  return (
 
    <div className="main-cointainer-analytic">
      <div className="analytic ">
        <div className="design">
          <div className="logo">
            <BsCreditCard />
          </div>
          <div className="action">
            <AiOutlineMore />
          </div>
        </div>
        <div className="transfer">
          <h6>income</h6>
          <h6>open invoices</h6>
          <h6>open invoices</h6>
        </div>
        <div className="money">
          <h5>$1200</h5>
        </div>
      </div>
      <div className="analytic ">
        <div className="design">
          <div className="logo">
            <BiTransfer />
          </div>
          <div className="action">
            <AiOutlineMore />
          </div>
        </div>
        <div className="transfer">
          <h6>Profit and loss </h6>
          <h6>Net income</h6>
        </div>
        <div className="money">
          <h5>$1200</h5>
        </div>
      </div>
     
      <div className="analytic ">
        <div className="design">
          <div className="logo">
            <GiTakeMyMoney />
          </div>
          <div className="action">
            <AiOutlineMore />
          </div>
        </div>
        <div className="transfer">
          <h6>Sales </h6>
          <h6>Past 30 days</h6>
        </div>
        <div className="money">
          <h5>$1500</h5>
        </div>
      </div>
    </div>
   
  );
}

export default Analytic;
