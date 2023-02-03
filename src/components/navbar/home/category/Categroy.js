import React from "react";
import Slider from "../../../silder/Slider";
import SubCategory from "./sub_category/SubCategory";
import FavouriteCardSection from "./favourite_card_section/FavouriteCardSection";


const Category = props => {
    return (
        <>
            <Slider />
            <div style={{position:"relative",top:"620px"}}>
                <SubCategory />
                <FavouriteCardSection />
            </div>
        </>
    );
}
export default Category;