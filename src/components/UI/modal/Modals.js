import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from "react-bootstrap/Container";
import classes from "../../navbar/home/interested_in/interested.module.css";
import style from "./modal.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {GiFoodTruck} from "react-icons/gi";
import {IoIosArrowUp} from "react-icons/io";
import React from "react";
import Search from "../search/Search";

const Modals = (props) => {
    const hideModal = ()=>{
       props.onHide(true);
    }

    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <Container fluid="md">
                    <Row className="justify-content-md-start  mb-0">
                        <Col xs lg="3" className="m-lg-5 mb-0">
                            <Search />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs lg="7">
                            <Card className={classes.card}>
                                <Card.Body style={{ textAlign:"center"}}>
                                    <Card.Title><GiFoodTruck  style={{fontSize:"100px",color:"white"}}/></Card.Title>
                                    <Card.Text style={{fontSize:"30px",fontWeight:"bolder",color:"white"}}>
                                        Food
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs lg="5">
                            <Card className={classes.card1}>
                                <Card.Body style={{ textAlign:"center"}}>
                                    <Card.Title><GiFoodTruck  style={{fontSize:"100px",color:"white"}}/></Card.Title>
                                    <Card.Text style={{fontSize:"30px",fontWeight:"bolder",color:"white"}}>
                                        Food
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs lg="4">
                            <Card className={classes.cards}>
                                <Card.Body style={{ textAlign:"center"}}>
                                    <Card.Title><GiFoodTruck  style={{fontSize:"100px",color:"white"}}/></Card.Title>
                                    <Card.Text style={{fontSize:"30px",fontWeight:"bolder",color:"white"}}>
                                        Food
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs lg="4">
                            <Card className={classes.cards}>
                                <Card.Body style={{ textAlign:"center"}}>
                                    <Card.Title><GiFoodTruck  style={{fontSize:"100px",color:"white"}}/></Card.Title>
                                    <Card.Text style={{fontSize:"30px",fontWeight:"bolder",color:"white"}}>
                                        Food
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs lg="4">
                            <Card className={classes.cards}>
                                <Card.Body style={{ textAlign:"center"}}>
                                    <Card.Title><GiFoodTruck  style={{fontSize:"100px",color:"white"}}/></Card.Title>
                                    <Card.Text style={{fontSize:"30px",fontWeight:"bolder",color:"white"}}>
                                        Food
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs lg="4">
                            <Card className={classes.cards}>
                                <Card.Body style={{ textAlign:"center"}}>
                                    <Card.Title><GiFoodTruck  style={{fontSize:"100px",color:"white"}}/></Card.Title>
                                    <Card.Text style={{fontSize:"30px",fontWeight:"bolder",color:"white"}}>
                                        Food
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs lg="4">
                            <Card className={classes.cards}>
                                <Card.Body style={{ textAlign:"center"}}>
                                    <Card.Title><GiFoodTruck  style={{fontSize:"100px",color:"white"}}/></Card.Title>
                                    <Card.Text style={{fontSize:"30px",fontWeight:"bolder",color:"white"}}>
                                        Food
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs lg="4">
                            <Card className={classes.cards}>
                                <Card.Body style={{ textAlign:"center"}}>
                                    <Card.Title><GiFoodTruck  style={{fontSize:"100px",color:"white"}}/></Card.Title>
                                    <Card.Text style={{fontSize:"30px",fontWeight:"bolder",color:"white"}}>
                                        Food
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col><button className={style['view-button']} onClick={hideModal}>Hide<IoIosArrowUp/></button></Col>
                    </Row>

                </Container>

            </Modal.Body>
        </Modal>
    );
}
export default Modals;