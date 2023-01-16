import React, {useState} from "react";
import {Link} from "react-router-dom";
import classes from "./navbar.module.css";
import {FaBars} from "react-icons/fa";
import {ImCross} from "react-icons/im";
import {GiPadlock} from "react-icons/gi";
import {IoPerson} from "react-icons/io5";
import {IoEarthOutline} from "react-icons/io5";
const Navbar = () => {
    const [Mobile,setMobile] = useState(false);
    return (
        <>
           <nav className={classes.navbar} >
                  <h3 className={classes.logo}>Logo</h3>


                  <ul className={ Mobile ?  classes['nav-links-mobile'] : classes['nav-links']}>
                      <Link to="/"><li>Home</li></Link>
                      <Link to="/Blog"><li>Blog</li></Link>
                      <Link to="/Service"><li>Service</li></Link>
                      <Link to="/Contact"><li>Contact</li></Link>
                      <Link to="/Job"><li>Job</li></Link>
                      <div className={classes.buttonDiv}>
                       <Link to="/Login"><li><button><GiPadlock/>LOGIN</button></li></Link>
                       <Link to="/Profile"><li><button><IoPerson /></button></li></Link>
                       <Link to="/Lang"><li><button><IoEarthOutline /></button></li></Link>
                      </div>

                  </ul>

           </nav>
            <button className={classes['mobile-menu-icon']} onClick={() => setMobile(!Mobile)}>
                {Mobile ? <ImCross/> : <FaBars />}
            </button>
        </>

    );
}
export default Navbar;