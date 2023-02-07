import React from "react";
import LeftFooter from "./component/LeftFooter";
import './component/footer.css';
import RightFooter from "./component/RightFooter";
import Services from "./component/Services";



const Reachout = () => {
return (
    <>
	<div className="main-div pt-4" style={{position:"relative",top:"700px",background:"#068083"}}>
        <div className="footer_container">
          <div className="row d-flex justify-content-around">
             <div className="col-sm-6 d-flex left-footer row-100">
              <LeftFooter/>
             </div>
             <div className="col-sm-3">
                <Services/>
             </div>
             <div className="col-sm-3 text-center d-sm-none d-md-block">
                <RightFooter/>
             </div>
             
          </div>


        </div>
    </div>
    <div className="end-footer" style={{position:"relative",top:"700px"}}>
        <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
    </div>
    </>
);
};
export default Reachout;
