import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./navbar.css";
import {FaBars} from "react-icons/fa";
import {ImCross} from "react-icons/im";
import {GiPadlock} from "react-icons/gi";
import {IoPerson} from "react-icons/io5";
import {IoEarthOutline} from "react-icons/io5";
const Navbar = () => {
    const [Mobile,setMobile] = useState(false);
    const [navbar,setNavbar] = useState(false);

    const changeBackground = () => {
      if(window.scrollY >= 80) {
          setNavbar(true);
      }else {
          setNavbar(false);
      }
    };
    window.addEventListener('scroll',changeBackground);
    return (
        <>
           <nav className='navbar' >
                  <h3 className={navbar ? 'logo active' : 'logo'}><img src={require("../../components/navbar/about_us/arab_img.png")} width="50px" height="50px" style={{borderRadius:"5px"}}/></h3>


                  <ul className={ Mobile ?  'nav-links-mobile' : (navbar ? 'nav-links active' : 'nav-links')}>
                      <Link to="/"><li>Home</li></Link>
                      <Link to="/Blog"><li>Blog</li></Link>
                      <Link to="/Service"><li>Service</li></Link>
                      <Link to="/ReachOut"><li>ReachOut</li></Link>
                      <Link to="/AboutUs"><li>About Us</li></Link>
                      <Link to="/Jobs"><li>Jobs</li></Link>
                      <div className={'buttonDiv'}>
                       <Link to="/Login"><li><button><GiPadlock/>LOGIN</button></li></Link>
                       <Link to="/Profile"><li><button><IoPerson /></button></li></Link>
                       <Link to="/Lang"><li><button><IoEarthOutline /></button></li></Link>
                      </div>

                  </ul>

           </nav>
            <button className={'mobile-menu-icon'} onClick={() => setMobile(!Mobile)}>
                {Mobile ? <ImCross/> : <FaBars />}
            </button>
        </>

    );
}
export default Navbar;