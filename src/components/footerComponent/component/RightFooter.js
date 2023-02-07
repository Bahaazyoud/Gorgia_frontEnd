import React from "react";
import {FiFacebook} from "react-icons/fi";
import {FaInstagram} from "react-icons/fa";
import {BsFillTelephoneFill} from "react-icons/bs";

function RightReachout(){
    return(
      <>
         <div className="right-div">
          <h3 className="div-title font-right ">Contact INFO</h3>
            <ul className="contact-info-footer">
              
                <li><FiFacebook style={{color:"white",fontSize:"20px",marginRight:"3px"}}/> arabingeorgia</li>
                <li><FaInstagram style={{color:"white",fontSize:"20px",marginRight:"6px"}}/>arabingeorgia</li>
                <li><BsFillTelephoneFill style={{color:"white",fontSize:"20px",marginRight:"3px"}}/>(470) 659-5499</li>
            </ul>
         </div>
      </>
    );

}

export default RightReachout;