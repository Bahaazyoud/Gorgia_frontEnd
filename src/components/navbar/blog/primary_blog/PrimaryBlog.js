import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./primary.module.css";
import Search from "../../../UI/search/Search";
import Card from "react-bootstrap/Card";
import {GiFoodTruck} from "react-icons/gi";
import Modals from "../../../UI/modal/Modals";
import {MdKeyboardArrowDown} from "react-icons/md";
const PrimaryBlog = () => {
    return (
        <div className={classes.container} >
            <Container fluid="md" >
                <Row className="justify-content-md-center gap-3">
                    <Col xs lg="7">
                        <Card className={classes.card}>
                            <div className="d-flex gap-3">
                                <div className="d-flex flex-column">
                                    <h3 className="title mb-3">
                                        Title
                                    </h3>
                                    <div>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Vitae congue eu consequat ac felis donec. Ante in nibh mauris cursus mattis.
                                            Rhoncus mattis rhoncus urna neque viverra justo nec ultrices.
                                            Leo vel orci porta non pulvinar neque laoreet.
                                            Turpis cursus in hac habitasse platea dictumst.
                                    </div>
                                </div>
                                <div className="image">
                                    <img src={require('./primary_blog_image/blog-post-image-guide.jpg')} width="350px" height="350px" style={{borderRadius:"7px"}}/>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xs lg="4">
                        <Card className={classes.card1} >
                            <Card.Title style={{textAlign:"left",color:"white"}}>Search</Card.Title>
                            <Search style={{width:"40px"}}/>
                        </Card>
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
export default PrimaryBlog;