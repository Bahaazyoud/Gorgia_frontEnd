import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./profileData.module.css";
const ProfileData = () => {
    const array = [
        {
            id:1,
            title:"User name",
            paragraph:"Bahaa Ahmed Ali Zyoud"
        },
        {
            id:2,
            title:"Age",
            paragraph:"22"

        },
        {
            id:3,
            title:"Gender",
            paragraph:"Male"

        },
        {
            id:4,
            title:"Email",
            paragraph:"bahaazyoud2000@gmail.com"
        },
        {
            id:5,
            title:"Phone number",
            paragraph:"0778091897"
        }
    ];
    return (
        <Row className='mb-1'>
            <Col lg={12} className={classes.container}>
                {array.map(data => (
                    <div key={data.id}>
                        <h5 className={classes.title}>{data.title}</h5>
                        <p className={classes.paragraph}>{data.paragraph}</p>
                    </div>
                ))}
            </Col>
        </Row>
    );
}
export default ProfileData;