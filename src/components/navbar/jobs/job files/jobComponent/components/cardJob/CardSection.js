import React from "react";
import cardStyle from "./card.module.css";
import Card from "./Card"

function CardSection(){
    return(
        <>
        <div className="">
            <div className={`row d-flex justify-content-end ${cardStyle.post_row}`}>  
                <div className="col-lg-2 col-md-2 col-sm-6">
                  <button className={`w-100 ${cardStyle.btn_post}`}>Post a job</button>
                </div>
            </div>

            <div className={`row pb-5 ${cardStyle.main_card_section}`}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

        </div>
        </>
    );
}

export default CardSection;