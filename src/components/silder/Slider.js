import Carousel from 'react-bootstrap/Carousel';
import {useState} from "react";
import classes from './style.module.css';
import {GiFoodTruck} from "react-icons/gi";
const Sliders = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (index, e) => {
        console.log(index)
        setIndex(index);
    };

    return  (
        <>
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} style={{position:"absolute",top:0,left:0,width:"100%",zIndex:-1}}>
            <Carousel.Item>

                <img
                    className="d-block w-100"
                    src={require('./sliderImage/istockphoto-1343159411-612x612.jpg')}
                    alt="First slide"
                    style={{height:'100vh'}}

                />
                <Carousel.Caption>
                    <div className={classes.parent}>
                        <button><GiFoodTruck /></button>
                        <button><GiFoodTruck /></button>
                        <button><GiFoodTruck /></button>
                        <button><GiFoodTruck /></button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('./sliderImage/istockphoto-1343159411-612x612.jpg')}
                    alt="Second slide"
                    style={{height:'100vh'}}
                />

                <Carousel.Caption>
                    <div className={classes.parent}>
                        <button><GiFoodTruck /></button>
                        <button><GiFoodTruck /></button>
                        <button><GiFoodTruck /></button>
                        <button><GiFoodTruck /></button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('./sliderImage/istockphoto-1343159411-612x612.jpg')}
                    alt="Third slide"
                    style={{height:'100vh'}}
                />

                <Carousel.Caption>
                    <div className={classes.parent}>
                        <button><GiFoodTruck /></button>
                        <button><GiFoodTruck /></button>
                        <button><GiFoodTruck /></button>
                        <button><GiFoodTruck /></button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
);
}
export default Sliders;