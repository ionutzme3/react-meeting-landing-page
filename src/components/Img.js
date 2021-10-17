import React from "react";
import classes from "./Img.module.css";


const Img = (props) => {
    return (
        <img className={classes.img} src={props.src} alt=""/>
    );
};

export default Img