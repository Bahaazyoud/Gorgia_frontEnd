import React from "react";
import cardStyle from "./card.module.css";


function Card(props){
    return(
        <>
        <div className={`col-sm-12 col-md-6 col-lg-4`}>
            <div className={`${cardStyle.card_body}`}>

            
            <div className={`row`}>
                <div className={`col-12 d-flex ${cardStyle.icon_row}`}>
                    <i class="fas fa-arrow-up"></i>
                    <i class="fas fa-bookmark"></i>
                 </div>
            </div>

            <div className={`row ${cardStyle.card_content}`}>
                <div className={`col-3`}>
                    <img className={`${cardStyle.card_img}`} src={require('./images/black.png')}/>
                </div>
                <div className={`pt-1 col-9 ${cardStyle.title}`}>
                    <h4>User name</h4>
                    <div className={`d-flex ${cardStyle.place}`}>
                    <i class="fas fa-thumbtack"></i>
                    <p>Place</p>
                    </div>
                </div>
            </div>

            <div className={`row ${cardStyle.card_content}`}>
                <h5>Job name</h5>
                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem.</p>
            </div>

            <div className={`row ${cardStyle.card_footer}`}>
                <p>4 days ago</p>
            </div>
            </div>
        </div>
        </>
    );
}

export default Card;