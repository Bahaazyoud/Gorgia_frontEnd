import React,{useState,useEffect} from "react";
import classes from "./interest.module.css";
import Grid from "@material-ui/core/Grid";
import InterestCategory from "./interestCategory";
import {motion,AnimatePresence} from "framer-motion";
import Filter from "./Filter";
import {ImageList, ImageListItem} from "@mui/material";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
const Interest = props =>  {
    const [popular,setPopular] = useState([]);
    const [filtered,setFiltered] = useState([]);
    const [activeGenre,setActiveGenre] = useState(0);
    useEffect(()=>{
        fetchPopular();
    },[]);
    const fetchPopular = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=81c26c636ee271df49475f707ba4e108&language=en-US&page=1");
        const movies = await data.json();
        setPopular(movies.results);
        setFiltered(movies.results)
    }
    const settings = {
        dots: true,
        infinite: true,
        initialSlide: 0,
        speed: 500,
        slidesToShow:3,
        centerPadding: "120px",
        rows:3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Container style={{position:"relative",top:"700px",height:"fit-content",marginBottom:"10%"}}>
                <Row className="justify-content-center">
                    <Col xs lg="6">
                        <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs lg="6">
                        <Slider {...settings}>
                            {/*<div className={classes.container}>*/}
                                {filtered.map((item) => (
                                    <ImageListItem key={item.id}>
                                        <InterestCategory key={item.id} movie={item}/>
                                    </ImageListItem>
                                ))}
                            {/*</div>*/}
                        </Slider>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Interest;