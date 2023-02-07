import Carousel from 'react-bootstrap/Carousel';
import {useState} from "react";
import '../../img/arabGorgia.jpg' ;
const Sliders = props => {
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
                    src={require('./gorgia.png')}
                    alt="First slide"
                    style={{height:'100vh',backgroundSize:"contain"}}

                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('./gorgia.png')}
                    alt="Second slide"
                    style={{height:'100vh',backgroundSize:"contain"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('./gorgia.png')}
                    alt="Third slide"
                    style={{height:'100vh',backgroundSize:"contain"}}
                />
            </Carousel.Item>
        </Carousel>
        </>
);
}
export default Sliders;