import React from "react";
import RightComponent from "./RightComponent";
import LeftComponent from "./LeftComponent";
import "./mainStyle.css"

function MainComponent(){

    return(
        <div className="d-flex mainCatBody"  style={{position:"relative",top:"700px"}}>
            <LeftComponent />
            <RightComponent />
        </div>
    );

}

export default MainComponent;