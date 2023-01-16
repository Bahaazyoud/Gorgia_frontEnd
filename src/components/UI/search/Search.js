import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from './search.module.css';
import {VscSearch} from "react-icons/vsc";
const Search = () => {
    return (
                <div className="d-flex justify-content-end align-items-center">
                    <VscSearch className={classes.fisearch}/>
                    <input className={classes.searchbar} placeholder="What are you looking for?"/>
                </div>

    );
}
export default Search