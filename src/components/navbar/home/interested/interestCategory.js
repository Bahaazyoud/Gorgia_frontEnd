import React from "react";
import {motion} from "framer-motion";
import classes from './interest.module.css';
const InterestCategory = ({ movie }) => {
    return (
        <motion.div layout initial={{ display:"none" }} animate={{ display:"block" }} exit={{ display:"none" }}>
            <a href='/Category'><img className={classes.images}
                src={"https://image.tmdb.org/t/p/w500"+ movie.backdrop_path}
                 alt=""
                 style={{background:"white"}}
            /></a>

        </motion.div>
    )
}
export default InterestCategory;