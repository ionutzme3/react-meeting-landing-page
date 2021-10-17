import React from "react";
import ImageHeroLeftDesktop from "../assets/desktop/image-hero-left.png";
import ImageHeroDesktop from "../assets/tablet/image-hero.png";
import ImageHeroRightDesktop from "../assets/desktop/image-hero-right.png";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero} >
      <div className={classes.img__heroLeft} >
        <img src={ImageHeroLeftDesktop} alt="" />
      </div>
      <div className={classes.img__heroDesktop} >
        <img src={ImageHeroDesktop} alt="" />
      </div>
      <div className={classes.hero__info}>
        <h1>Group Chat for Everyone</h1>
        <p>
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
        <div class="actions">
          <button class="btn btn-primary">
            Download <span>v1.3</span>
          </button>
          <button class="btn btn-secondary">What is it?</button>
        </div>
      </div>
      <div className={classes.img__heroRight} >
        <img src={ImageHeroRightDesktop} alt="" />
      </div>
    </div>
  );
};

export default Hero;
