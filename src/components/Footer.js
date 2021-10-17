import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.footer__container}>
        <h2>Experience more together</h2>
        <p>
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <button class="btn btn-secondary">Download v1.3</button>
      </div>
    </footer>
  );
};

export default Footer;
