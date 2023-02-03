import Grid from "@material-ui/core/Grid";
import './blogSection.css';
import {useState} from "react";
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
    <Grid container spacing={2} justifyContent="center"  className={show ? 'blogContainer active' : 'blogContainer'}>
        <Grid item xs={6} md={6} lg={5} style={{marginTop:"50px"}} className='blogContent'>
            <h1 style={{fontSize:"100px",fontWeight:"bolder",fontFamily:"sans-serif"}}>Blog</h1>
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
        </Grid>
        <Grid item lg={5}>
            <div className='img' ></div>
        </Grid>
    </Grid>
    );
}
export default BlogSection;