import React from "react";

import classes from "./MeetingInfo.module.css";

const MeetingInfo = () => {
  return (
    <section className={classes.meeting__info} >
      <h3>Built for modern use</h3>
      <h2>Smarter meetings, all in one place</h2>
      <p>
        Send messages, share files, show your screen, and record your meetings —
        all in one workspace. Control who can join with invite-only team access,
        data encryption, and data export.
      </p>
    </section>
  );
};

export default MeetingInfo;
