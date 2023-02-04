import React from "react";
import AdsCategory from "./AdsCategory";
import MapCategory from "./MapCategory";

function RightComponent(){

    return(

        <>
        <div className="col-md-4 col-sm-12">
            <MapCategory/>
            <AdsCategory/>

        </div>
        </>
    );

}

export default RightComponent;