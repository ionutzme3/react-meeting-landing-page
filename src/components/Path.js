import React from "react";

const Path = (props) => {
  return (
    // {`pill ${ this.props.styleName }`}
    <section class={`path ${props.noBottom}`}>
      <div class="path__content">
        <div class="line"></div>
        <div class="number">01</div>
      </div>
    </section>
  );
};

export default Path;
