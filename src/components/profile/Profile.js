import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Sliders from "../silder/Slider";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./profileInfo/ProfileInfo";
import ProfileSaved from "./profileInfo/ProfileSaved";
const Profile = () => {
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
        <>
            <div style={{position:"relative",top:"100px"}}>
                <Container>
                    <Row>
                        <ProfileImage />
                        <ProfileInfo />
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default Profile;