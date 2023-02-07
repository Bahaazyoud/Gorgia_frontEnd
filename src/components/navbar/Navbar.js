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
                    <Link to="/" style={{background:"transparent"}}><li>Home</li></Link>
                    <Link to="/Blog" style={{background:"transparent"}}><li>Blog</li></Link>
                    <Link to="/Service" style={{background:"transparent"}}><li>Service</li></Link>
                    <Link to="/ReachOut" style={{background:"transparent"}}><li>ReachOut</li></Link>
                    <Link to="/AboutUs" style={{background:"transparent"}}><li>About Us</li></Link>
                    <Link to="/Jobs" style={{background:"transparent"}}><li>Jobs</li></Link>
                    <div className={'buttonDiv'}>
                        <Link to="/Login" style={{background:"transparent"}}><li><button><GiPadlock/>LOGIN</button></li></Link>
                        <Link to="/Profile" style={{background:"transparent"}}><li><button><IoPerson /></button></li></Link>
                        <Link to="/Lang" style={{background:"transparent"}}><li><button><IoEarthOutline /></button></li></Link>
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