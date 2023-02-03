import React,{useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import classes from './interest.module.css';
const Filter = ({popular,setFiltered,activeGenre,setActiveGenre}) => {
    useEffect(()=>{
        if (activeGenre == 0){
            setFiltered(popular);
            return;
        }
        const filter = popular.filter((movie)=> movie.genre_ids.includes(activeGenre));
        setFiltered(filter);
    },[activeGenre]);
    return (
        <Grid item xs={8}  className={classes['filter-container']} >
            <button className={activeGenre === 0 ? classes.active : ''} onClick={()=>setActiveGenre(0)}>All</button>
          <button className={activeGenre === 3 ? classes.active : ''} onClick={()=>setActiveGenre(3)}>Business</button>
          <button className={activeGenre === 28 ? classes.active : ''} onClick={()=>setActiveGenre(28)}>Services</button>
        </Grid>
    );
}
export default Filter;