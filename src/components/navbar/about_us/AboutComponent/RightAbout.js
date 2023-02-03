import React from "react";
import Col from 'react-bootstrap/Col';
import {useTranslation} from "react-i18next";
import "./About.css";
import { Link } from 'react-router-dom';


function LeftAbout(props){
    const [t, i18n] = useTranslation();

    return(

        <Col lg="5" xs="12">

        <div className="d-flex">
                <img className="right-img mt-4" src={require('../arab_img.png')} />
        </div>

    </Col>
    )


}

export default LeftAbout;