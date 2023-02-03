import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import classes from './favourite_card_section.module.css';
import {BsFillHeartFill} from "react-icons/bs";
import {GiCakeSlice, GiFoodTruck} from "react-icons/gi";
import Grid from "@material-ui/core/Grid";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const FavouriteCardSection = props => {
    const FavouriteCard = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6},
    ];

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    return (
        <div className={classes.bigContainer}>


        <div className={classes.leftSideContainer}>

            {FavouriteCard.map((index) => (


                            <div  key={index} className={classes.containerCard}>

                                    <div className={classes.favourite}>
                                        <img src={require('../../../blog/primary_blog/primary_blog_image/blogSliderImage.jpg')} alt="card image"/>
                                        <BsFillHeartFill style={{margin:"-30% 0px 0px 5%"}}/>
                                        <GiCakeSlice style={{margin:"-30% 0px 0px 70%"}}/>

                                    </div>
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary" style={{marginTop:"-10%"}}>
                                            This impressive paella is a perfect party dish and a fun meal to cook
                                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                                            if you like.
                                        </Typography>
                                    </CardContent>
                            </div>




            ))}
        </div>



                <iframe width="500" height="519" className={classes.gmap_canvas}
                        src="https://maps.google.com/maps?q=jordan%20irbid&t=&z=9&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                        onPointerMove
                        style={{borderRadius:"15px"}}
                ></iframe>


        </div>
    );
}
export default FavouriteCardSection;