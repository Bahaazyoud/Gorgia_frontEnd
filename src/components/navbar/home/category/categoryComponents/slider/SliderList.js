import React, {useState, useEffect } from "react";
import sliderCss from "./slider.module.css";
import "../mainComponent/mainStyle.css";


function SliderList(props){
    const [activeInd, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        console.log(index + " index");
        setActiveIndex(index);
        console.log(activeInd + " Active");
      }


    return(
        <>
        {/* <li key="{key}">{props.text}</li> */}
        <li  className={`${activeInd === props.id ? "Active" : ""}`} onClick={() => handleClick(props.id)}>
                <div >
                    <img className={sliderCss.subImg} src={require(`./images/${props.id}_li.png`)}/>
                    <p className={sliderCss.subTitle}>{`${props.name} ${props.id}`}</p>
                </div>
        </li>
        </>
    );
}

export default SliderList;