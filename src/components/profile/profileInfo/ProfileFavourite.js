import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const ProfileFavourite = () => {
    const array = [
        {
            id:1,

        },
        {
            id:2,
        },
        {
            id:3,
        },
        {
            id:4,
        },
        {
            id:5,
        }    ,
        {
            id:6,
        }
    ];

    return (
        <Row className='mb-1'>
                {array.map(data => (
                    <Col lg={4}>
                    <Card>
                       <Card.Body>
                           <Card.Title>Favourite</Card.Title>
                           <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                           <Card.Text>
                               Some quick example text to build on the card title and make up the
                               bulk of the card's content.
                           </Card.Text>
                       </Card.Body>
                    </Card>
                    </Col>
                ))}
        </Row>
    );
};
export default ProfileFavourite;