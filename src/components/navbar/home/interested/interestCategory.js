import React from "react";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";

import classes from './interest.module.css';
const InterestCategory = ({ movie }) => {
    return (
        <motion.div layout initial={{ display:"none" }} animate={{ display:"block" }} exit={{ display:"none" }}>
                <Link to='/Category'><img className={classes.images}
                                          src={"https://image.tmdb.org/t/p/w500"+ movie.backdrop_path}
                 alt=""
                 style={{background:"white",width:"11 0%"}}
                /></Link>

        </motion.div>
    )
}
export default InterestCategory;