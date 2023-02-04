import React from "react";

import SubCategorySlider from "./categoryComponents/slider/SubCategorySlider";
import MainComponent from "./categoryComponents/mainComponent/MainComponent";

import "./categoryComponents/mainComponent/mobile.css";
import "./categoryComponents/mainComponent/tablet.css";
import "./categoryComponents/mainComponent/laptop.css";
import Slider from "../../../silder/Slider";


function CategoryPage(){
  return(
      <>
          <SubCategorySlider/>
          <MainComponent/>
        </>
  );
}

export default CategoryPage;