import React, {useState, useEffect } from "react";
import sliderCss from "./slider.module.css";
// import "../mainComponent/mainStyle.css";

import { Component } from 'react'

import ScrollContainer from 'react-indiana-drag-scroll'

function SubCategorySlider(){


    // let subCategoryListTest = [{id :0 , Name : "Coffee"},{id :1, Name : "Desert"},{id :2, Name :"Bakary"}];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
      }

    return(
        <>

<div className={sliderCss.width_slider}  style={{position:"relative",top:"700px"}}>
    <ScrollContainer className="scroll-container">
    <ul className={`${sliderCss.slider_ul}`}>
            <li className={`${activeIndex === 0 ? sliderCss.activeLi : ""}`} onClick={() => handleClick(0)}>
                <div className={sliderCss.nav_body}>
                    <img className={sliderCss.subImg} src={require('./images/jobs-logo.png')}/>
                    <p className={sliderCss.subTitle}>Jobs</p>
                </div>
            </li>
         
            <li className={`${activeIndex === 1 ? sliderCss.activeLi : ""}`}  onClick={() => handleClick(1)}>
                <div className={sliderCss.nav_body}>
                    <img className={sliderCss.subImg} src={require('./images/accomodation-logo.png')}/>
                    <p className={sliderCss.subTitle}>Rent</p>
                </div>
            </li>
       
        </ul>
      </ScrollContainer>
      </div>
        
        </>
    );
}

export default SubCategorySlider;