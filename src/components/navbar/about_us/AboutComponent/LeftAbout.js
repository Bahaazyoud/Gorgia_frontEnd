import React from "react";
import Col from 'react-bootstrap/Col';
import {useTranslation} from "react-i18next";
import "./About.css";
import { Link } from 'react-router-dom';


function LeftAbout(props){
    const [t, i18n] = useTranslation();

    return(

        <Col lg="5" xs="12">
        <h1 className="about-title">{props.title}</h1>
        <h4 className="first-p">{props.first}</h4>
        <p className="middle-p">{props.middle}</p>
        <p className="middle-p">{props.last}</p>
        <div className="d-flex justify-content-end">
        <Link className="about-link mb-5" to='#'>Learn more</Link>
        </div>

    </Col>
    )


}

export default LeftAbout;