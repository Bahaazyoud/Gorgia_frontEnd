import React, {useState, Component } from "react";
import Slider from "react-slick";
import mainCom from "./mainCom.module.css";
// import Heart from "react-animated-heart";
import "./mainStyle.css";
// import "./laptop.css";


export default class PopularCategory extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      favClass: "far",
    };
  }

  
  favClick = (index)=>{
    alert(index);
    
    // console.log("fav clicked");
    // alert(this.state.favClass);
    if(this.state.favClass === "far"){
    this.setState({
      favClass: "fas",
    });
  }else{
    this.setState({
      favClass: "far",
    });
  }
    // alert(this.state.favClass);

  };


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


  // let subCategoryListTest = [{id :0 , Name : "Coffee"},{id :1, Name : "Desert"},{id :2, Name :"Bakary"}];


  // let subCategoryList = subCategoryListTest.map(subCat => <SliderList name = {subCat.Name} id = {subCat.id} key = {subCat.id}/>);

  return (
    <>
    <h1 className={`${mainCom.dealsMainTitle} mt-4 mb-3`}>Popular Category</h1>
    <div className={mainCom.DealsMainDiv}>
      <Slider {...settings}>

       
        <div className={mainCom.DealsSubDiv}>
            <div className={mainCom.card} >
              <img className="card-img-top" src={require('./images/1_deals.png')} alt="Card image cap"/>
              {/* <Heart isClick={isClick} onClick={() => setClick(!isClick)} /> */}
              <div className="card-body mt-1">
              <button className="add-fav-btn"><i onClick={() => this.favClick(1)} className={`${this.state.favClass} fa-heart`}></i></button>
                <h4 className="cardRestTitle">Resturant name</h4>
                <p className="card-text">Some quick example text to build on the card title and make .</p>
              </div>
            </div>
        </div>
      
        <div className={mainCom.DealsSubDiv}>
            <div className={mainCom.card} >
              <img className="card-img-top" src={require('./images/2_deals.png')} alt="Card image cap"/>
              <div className="card-body mt-1">
              <button className="add-fav-btn"><i onClick={() => this.favClick(2)} className={`${this.state.favClass} fa-heart`}></i></button>
                <h4 className="cardRestTitle">Resturant name</h4>
                <p className="card-text">Some quick example text to build on the card title and make .</p>
              </div>
            </div>
        </div>
      
        <div className={mainCom.DealsSubDiv}>
            <div className={mainCom.card} >
              <img className="card-img-top" src={require('./images/3_deals.png')} alt="Card image cap"/>
              <div className="card-body mt-1">
              <button className="add-fav-btn"><i onClick={() => this.favClick(3)} className={`${this.state.favClass} fa-heart`}></i></button>
                <h4 className="cardRestTitle">Resturant name</h4>
                <p className="card-text">Some quick example text to build on the card title and make .</p>
              </div>
            </div>
        </div>
      
        <div className={mainCom.DealsSubDiv}>
            <div className={mainCom.card} >
              <img className="card-img-top" src={require('./images/1_deals.png')} alt="Card image cap"/>
              <div className="card-body mt-1">
                <h4 className="cardRestTitle">Resturant name</h4>
                <p className="card-text">Some quick example text to build on the card title and make .</p>
              </div>
            </div>
        </div>
      
        <div className={mainCom.DealsSubDiv}>
            <div className={mainCom.card} >
              <img className="card-img-top" src={require('./images/1_deals.png')} alt="Card image cap"/>
              <div className="card-body mt-1">
                <h4 className="cardRestTitle">Resturant name</h4>
                <p className="card-text">Some quick example text to build on the card title and make .</p>
              </div>
            </div>
        </div>
      
        <div className={mainCom.DealsSubDiv}>
            <div className={mainCom.card} >
              <img className="card-img-top" src={require('./images/1_deals.png')} alt="Card image cap"/>
              <div className="card-body mt-1">
                <h4 className="cardRestTitle">Resturant name</h4>
                <p className="card-text">Some quick example text to build on the card title and make .</p>
              </div>
            </div>
        </div>
      
        <div className={mainCom.DealsSubDiv}>
            <div className={mainCom.card} >
              <img className="card-img-top" src={require('./images/1_deals.png')} alt="Card image cap"/>
              <div className="card-body mt-1">
                <h4 className="cardRestTitle">Resturant name</h4>
                <p className="card-text">Some quick example text to build on the card title and make .</p>
              </div>
            </div>
        </div>
      
        <div className={mainCom.DealsSubDiv}>
            <div className={mainCom.card} >
              <img className="card-img-top" src={require('./images/1_deals.png')} alt="Card image cap"/>
              <div className="card-body mt-1">
                <h4 className="cardRestTitle">Resturant name</h4>
                <p className="card-text">Some quick example text to build on the card title and make .</p>
              </div>
            </div>
        </div>
      
      </Slider>
    </div>
    </>
  );
}
}