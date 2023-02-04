import React from "react";
import PopularCategory from "./PopularCategory";
import AllCategory from "./AllCategory";
import DealsCategory from "./DealsCategory";

function LeftComponent(){

    return(

        <>
        <div className="col-md-8 col-sm-12">
            <PopularCategory/>
            <AllCategory/>
            <DealsCategory/>
        </div>
        </>
    );

}

export default LeftComponent;