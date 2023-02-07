import React, {useState} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import classes from "./profileInfo.module.css";
import ProfileData from "./profileData/ProfileData";
import ProfileFavourite from "./ProfileFavourite";
import ProfileSaved from "./ProfileSaved";
const ProfileInfo = () => {
    const [showFavourite,setShowFavourite] = useState(false);
    const [showSave,setShowSave] = useState(false);
    const [showColorFavourite,setShowColorFavourite] = useState('#4e796e');
    const [showColorSave,setShowColorSave] = useState('#4e796e');
    const showFavourites = () => {
        setShowFavourite(true);
        setShowSave(false);
        setShowColorFavourite('orange')
        setShowColorSave('#4e796e')
    }
    const showSaved = () => {
        setShowSave(true);
        setShowFavourite(false);
        setShowColorFavourite('#4e796e')
        setShowColorSave('orange')
    }
    return (
        <>
            <Col lg={8} >
                <Row className='text-center mb-1'>
                    <Col lg={6} className={classes.favourite} style={{background:showColorFavourite}}>
                        <button onClick={showFavourites}>
                            Favourite
                        </button>
                    </Col>
                    <Col lg={6} className={classes.saved} style={{background:showColorSave}}>
                        <button onClick={showSaved}>
                            Saved
                        </button>
                    </Col>
                </Row>
                <ProfileData />
                {showFavourite ? <ProfileFavourite /> : null}
                {showSave ? <ProfileSaved /> : null}
            </Col>

        </>
    );
}
export default ProfileInfo;