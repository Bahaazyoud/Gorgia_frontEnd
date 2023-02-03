import React from "react";
import SubNav from "./components/slider/SubNav";
import JobBody from "./components/JobBody";
import Slider from "../../../../silder/Slider";

function Job(){
    return(
        <>
            <Slider />
            <SubNav/>
            <JobBody/>
        
        </>
    );
}

export default Job;