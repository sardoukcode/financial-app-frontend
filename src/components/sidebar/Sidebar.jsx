import React from "react";
// import styled from 'styled-components'

import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsCreditCard2Front } from "react-icons/bs";
import { AiOutlineTrophy } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineDotChart } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import "./Sidebar.css";
import profilepic from './profilepicture.png';

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    
    <div className="main-section-sidebar">
     
      <div className="top">
        <div className="brand">
          <BsCircleFill className="color1" />
          <BsCircleFill className="color2" />
          <BsCircleFill className="color3" />
        </div>
        <div> <img src={profilepic} alt="" /> 
        <p>Full Name</p>
        </div>

        <div className="links">
          <ul>
            <li className="flex-links">
            <Link to ='/dashboard'> <BiHomeAlt /> </Link>
            </li>
            <li className="flex-links">
             <Link to ='/payment'> <AiOutlineFundProjectionScreen /></Link>
            </li>
            <li className="flex-links">
              <AiOutlineFileText />
            </li>
            <li className="flex-links">
              <a href="#">
                <BsCreditCard2Front />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default Sidebar;
