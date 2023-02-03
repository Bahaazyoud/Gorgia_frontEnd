import React from "react";
import LeftReachout from "./reachoutComponent/LeftReachout";
import './reachoutComponent/reachout.css';
import RightReachout from "./reachoutComponent/RightReachout";
import FormReachout from "./reachoutComponent/FormReachout";

const Reachout = () => {
return (
	<div className="main-div mt-4 pt-4" style={{position:"relative",top:"660px"}}>
        <div className="container">
          <div className="row d-flex justify-content-around row-height">
             <div className="col-sm-12 col-lg-4 d-flex justify-content-center row-100">
              <LeftReachout/>
             </div>
             <div className="col-4">
                <FormReachout/>
             </div>
             <div className="col-4 text-center">
                <RightReachout/>
             </div>
             
          </div>


        </div>

    </div>
);
};
export default Reachout;
