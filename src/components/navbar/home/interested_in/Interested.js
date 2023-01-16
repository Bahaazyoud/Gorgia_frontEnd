import React, {useState} from "react";
import classes from "./interested.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {GiFoodTruck} from "react-icons/gi";
import Search from "../../../UI/search/Search";
import {MdKeyboardArrowDown} from "react-icons/md";
import Modals from "../../../UI/modal/Modals";
import Button from "react-bootstrap/Button";
const Interested = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className={classes.container} >
            <Container fluid="md">
                <Row>
                    <Col><h3>What are you interested in ?</h3></Col>
                </Row>
            </Container>
            <Container fluid="md" className={classes['category-container']}>
                <Row className="justify-content-md-start pt-3 mb-0">
                    <Col xs lg="5" className="m-lg-4 mb-0">
                        <Search />
                    </Col>
                </Row>
                <Row className="justify-content-md-center gap-3">
                    <Col xs lg="5">
                            <Card className={classes.card}>
                            <Card.Body style={{ textAlign:"center"}}>
                                <Card.Title><GiFoodTruck  style={{fontSize:"100px",color:"white"}}/></Card.Title>
                                <Card.Text style={{fontSize:"30px",fontWeight:"bolder",color:"white"}}>
                                    Food
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs lg="4">
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
                 <Row className="justify-content-md-center gap-3">
                     <Col xs lg="3">
                         <Card className={classes.cards}>
                             <Card.Body style={{ textAlign:"center"}}>
                                 <Card.Title><GiFoodTruck  style={{fontSize:"100px",color:"white"}}/></Card.Title>
                                 <Card.Text style={{fontSize:"30px",fontWeight:"bolder",color:"white"}}>
                                     Food
                                 </Card.Text>
                             </Card.Body>
                         </Card>
                     </Col>
                     <Col xs lg="3">
                         <Card className={classes.cards}>
                             <Card.Body style={{ textAlign:"center"}}>
                                 <Card.Title><GiFoodTruck  style={{fontSize:"100px",color:"white"}}/></Card.Title>
                                 <Card.Text style={{fontSize:"30px",fontWeight:"bolder",color:"white"}}>
                                     Food
                                 </Card.Text>
                             </Card.Body>
                         </Card>
                     </Col>
                     <Col xs lg="3">
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
                    <Modals
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <Col><button className={classes['view-button']} variant="primary" onClick={() => setModalShow(true)}>View All<MdKeyboardArrowDown/></button></Col>

                </Row>
            </Container>
            <Container fluid="md" className={classes['category-container']}>

                <Row className="justify-content-md-center pt-5 pb-5">
                    <Col xs lg="10">
                        <Card className={classes.card}>
                            <Card.Body style={{ textAlign:"center"}}>
                                <Card.Title><GiFoodTruck  style={{fontSize:"100px",color:"white"}}/></Card.Title>
                                <Card.Text style={{fontSize:"30px",fontWeight:"bolder",color:"white"}}>
                                    Food
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}
export default Interested;