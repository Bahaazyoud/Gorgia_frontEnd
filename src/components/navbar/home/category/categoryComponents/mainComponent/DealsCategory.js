import React, { Component } from "react";
import Slider from "react-slick";
import mainCom from "./mainCom.module.css";


export default class DealsCategory extends Component {


render() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };
  return (
    <>
    <h1 className={mainCom.dealsMainTitle}>Deals</h1>
    <div className={mainCom.DealsMainDiv}>
      <Slider {...settings}>
        <div className={mainCom.DealsSubDiv}>
            <div className={mainCom.card} >
              <img className="card-img-top" src={require('./images/1_deals.png')} alt="Card image cap"/>
              <div className="card-body mt-1">
                <h4 className="cardRestTitle">Resturant name</h4>
                <p className="card-text">Some quick example text to build on the card title and.</p>
              </div>
            </div>
        </div>
      
        <div className={mainCom.DealsSubDiv}>
            <div className={mainCom.card} >
              <img className="card-img-top" src={require('./images/2_deals.png')} alt="Card image cap"/>
              <div className="card-body mt-1">
                <h4 className="cardRestTitle">Resturant name</h4>
                <p className="card-text">Some quick example text to build on the card title and.</p>
              </div>
            </div>
        </div>
      
        <div className={mainCom.DealsSubDiv}>
            <div className={mainCom.card} >
              <img className="card-img-top" src={require('./images/3_deals.png')} alt="Card image cap"/>
              <div className="card-body mt-1">
                <h4 className="cardRestTitle">Resturant name</h4>
                <p className="card-text">Some quick example text to build on the card title and.</p>
              </div>
            </div>
        </div>
      
        <div className={mainCom.DealsSubDiv}>
            <div className={mainCom.card} >
              <img className="card-img-top" src={require('./images/1_deals.png')} alt="Card image cap"/>
              <div className="card-body mt-1">
                <h4 className="cardRestTitle">Resturant name</h4>
                <p className="card-text">Some quick example text to build on the card title and.</p>
              </div>
            </div>
        </div>
      
        <div className={mainCom.DealsSubDiv}>
            <div className={mainCom.card} >
              <img className="card-img-top" src={require('./images/1_deals.png')} alt="Card image cap"/>
              <div className="card-body mt-1">
                <h4 className="cardRestTitle">Resturant name</h4>
                <p className="card-text">Some quick example text to build on the card title and.</p>
              </div>
            </div>
        </div>
      
        <div className={mainCom.DealsSubDiv}>
            <div className={mainCom.card} >
              <img className="card-img-top" src={require('./images/1_deals.png')} alt="Card image cap"/>
              <div className="card-body mt-1">
                <h4 className="cardRestTitle">Resturant name</h4>
                <p className="card-text">Some quick example text to build on the card title and.</p>
              </div>
            </div>
        </div>
      
        <div className={mainCom.DealsSubDiv}>
            <div className={mainCom.card} >
              <img className="card-img-top" src={require('./images/1_deals.png')} alt="Card image cap"/>
              <div className="card-body mt-1">
                <h4 className="cardRestTitle">Resturant name</h4>
                <p className="card-text">Some quick example text to build on the card title and.</p>
              </div>
            </div>
        </div>
      
        <div className={mainCom.DealsSubDiv}>
            <div className={mainCom.card} >
              <img className="card-img-top" src={require('./images/1_deals.png')} alt="Card image cap"/>
              <div className="card-body mt-1">
                <h4 className="cardRestTitle">Resturant name</h4>
                <p className="card-text">Some quick example text to build on the card title and.</p>
              </div>
            </div>
        </div>
      
      </Slider>
    </div>
    </>
  );
}
}