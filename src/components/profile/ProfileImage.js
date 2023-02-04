import React from "react";
import Col from "react-bootstrap/Col";
const ProfileImage = () => {
    return (
        <Col lg={4}>
            <img src={require("../navbar/blog/primary_blog/primary_blog_image/blogSliderImage.jpg")} height="500px" width="100%" style={{borderRadius:"7px"}}/>
        </Col>
    );
}
export default ProfileImage;