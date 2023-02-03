import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Events from "../../events/Events";
import Container from "react-bootstrap/Container";
import classes from "../../events/event_cards/eventCard.module.css";
import Badge from "react-bootstrap/Badge";


const AllBlogs = props => {
        const array = [
            {
              id:1
            }, {
              id:2
            } ,{
              id:3
            }, {
              id:4
            }
        ]
        return(
            <div style={{position:"relative",top:"750px"}}>
                <Container fluid>
                    <h2>
                        Statics
                    </h2>
                    <Row>
                        <Col lg={8}>
                       {array.map((card,index) => {
                        return (
                            <>
                                <div className="card">
                                    <div className="img-container"></div>
                                    <div className="card-content">
                                        <h3 style={{marginTop:"15px"}}>From the Other Side of the World</h3>
                                        <div className="date">
                                            Thursday, 8 December 2022
                                        </div>
                                        <p className="excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Mollitia odio dolorem amet, sunt magnam asperiores exercitationem
                                            consequuntur? Molestias asperiores rerum doloremque reiciendis.</p>
                                        <p className="author">By Jrom</p>
                                    </div>
                                </div>
                            </>
                            )})}
                        </Col>
                        <Col lg={4}>
                            <Events />
                        </Col>
                    </Row>
                </Container>
            </div>
        );

}
export default AllBlogs;