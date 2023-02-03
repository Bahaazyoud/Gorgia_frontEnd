import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.css"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftAbout from './LeftAbout';
import RightAbout from './RightAbout';
import "./About.css"


import {useTranslation} from "react-i18next";

function AboutMain() {
    const [show,setShow] = useState(false);
    const [t, i18n] = useTranslation();

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setShow(true);
        }else {
            setShow(false);
        }
    };
    window.addEventListener('scroll',changeBackground);


    return (
        <div className={show ? 'about-div active' : 'about-div'} style={{position:"relative",top:"645px"}}>
   <Container className='about-container col-12'>
        <Row className='mb-3'>
            <Col lg="12" >
                <h2 className='display-4 mb-4 mt-5 text-center' style={{fontSize:"80px",color:"white",fontWeight:"bolder",fontFamily:"sans-serif"}}>{t('ABOUT US')}</h2>
            </Col>
        </Row>
        <Row className='mb-4 row-container'>
           
            <LeftAbout 
                title="Lorem ipsum dolor sit"
                first="amet, consectetuer adipiscing elit,
                sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna
                aliquam"
                middle="amet, consectetuer adipiscing elit,
                sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna
                aliquam"
                last="amet, consectetuer adipiscing elit,
                sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna
                aliquam"
            />

          <RightAbout />

        </Row>


   </Container>
   </div>
  
    );
}

export default AboutMain;
