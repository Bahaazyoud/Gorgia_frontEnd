// import React from "react";
// import mainCom from "./mainCom.module.css";

// function AllCategory(){
//     return(
//         <>
//         <div className="col-12">

//             <h2>All Category</h2>
//             <div className={mainCom.mainDivAll} >
//                  <div className={mainCom.subDivAll}>
//                  <h1>AllCategory1</h1>

//                  </div>
//                  <div className={mainCom.subDivAll}>
//                  <h1>AllCategory2</h1>

//                  </div>
                
//             </div>
//         </div>
        
//         </>
//     );
// }

// export default AllCategory;



import React, { Component } from "react";
import Slider from "react-slick";
import mainCom from "./mainCom.module.css";


export default class MultipleRows extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: false,
      centerPadding: "0px",
      slidesToShow: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesPerRow: 2,
            infinite: false,
            rows: 2,
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesPerRow: 1,
            infinite: false,
            rows: 2,
          }
        }
      ]
    };
    return (
        <>
            <h1 className={mainCom.dealsMainTitle}>All</h1>
      <div className={mainCom.mainDivAll}>
        <Slider {...settings}>
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
              <img className="card-img-top" src={require('./images/2_deals.png')} alt="Card image cap"/>
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
              <img className="card-img-top" src={require('./images/2_deals.png')} alt="Card image cap"/>
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
              <img className="card-img-top" src={require('./images/2_deals.png')} alt="Card image cap"/>
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
              <img className="card-img-top" src={require('./images/2_deals.png')} alt="Card image cap"/>
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
              <img className="card-img-top" src={require('./images/2_deals.png')} alt="Card image cap"/>
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
              <img className="card-img-top" src={require('./images/2_deals.png')} alt="Card image cap"/>
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
              <img className="card-img-top" src={require('./images/2_deals.png')} alt="Card image cap"/>
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
              <img className="card-img-top" src={require('./images/2_deals.png')} alt="Card image cap"/>
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
        
        </Slider>
      </div>
      </>
    );
  }
}