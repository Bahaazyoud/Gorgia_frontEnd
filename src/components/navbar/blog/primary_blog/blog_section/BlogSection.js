import './blogSection.css';
import {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const BlogSection = props => {
    const [show,setShow] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 100) {
            setShow(true);
        }else {
            setShow(false);
        }
    };
    window.addEventListener('scroll',changeBackground);
    return (
        <Container className={show ? 'blogCont active' : 'blogCont'} fluid >
            <Row style={{padding:"5% 20px",color:"white"}} className="d-flex align-items-center justify-content-center">
                <Col lg={7} md={7} sm={12}>
                    <h1>Blog</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </Col>
                <Col lg={5} md={5} sm={12}>
                    <img src={require('../../../../../img/food.jpeg')} width='100%' className="imageBlog" style={{borderRadius:"10px"}}/>
                </Col>

            </Row>
        </Container>
    );
}
export default BlogSection;