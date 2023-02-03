import React from "react";
import SubCategoryImage from "./sub_category_image/SubCategoryImage";


const SubCategory = props => {
    const subCategoryImageIndex = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6},
        {id:7},
        {id:8},
    ];

    return (
        <div className="d-flex justify-content-sm-evenly align-items-center flex-md-row flex-column" style={{background:"white",boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            {subCategoryImageIndex.map((index) => {
               return <SubCategoryImage/>
            })}
        </div>
    );
}
export default SubCategory;