import React from "react";
import Col from "react-bootstrap/Col";
const ProfileImage = () => {
    return (
        <Col lg={4}>
            <img src={require("./profile.png")} height="450px" width="100%" style={{borderRadius:"7px"}}/>
        </Col>
    );
}
export default ProfileImage;