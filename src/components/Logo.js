import React from "react";
import LogoImg from "../assets/logo.svg";

import classes from "./Logo.module.css";



const Logo = () => {
    return (
        <div className={classes.logo}>
            <img src={LogoImg} alt="" />
        </div>
    );
};

export default Logo;