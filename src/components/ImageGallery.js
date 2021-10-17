import React from "react";
import Img from "./Img";
import ImageWomanInVideocall from "../assets/desktop/image-woman-in-videocall.jpg"
import ImageWomenVideoChatting from "../assets/desktop/image-women-videochatting.jpg"
import ImageMenInMeeting from "../assets/desktop/image-men-in-meeting.jpg"
import ImageManTexting from "../assets/desktop/image-man-texting.jpg";

import classes from "./ImageGallery.module.css";

const ImageGallery = () => {
  return (
    <section className={classes.gallery__image}>
        <Img src={ImageWomanInVideocall} />
        <Img src={ImageWomenVideoChatting} />
        <Img src={ImageMenInMeeting} />
        <Img src={ImageManTexting} />
    </section>
  );
};

export default ImageGallery;
