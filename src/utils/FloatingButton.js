import React, { Fragment } from "react";

const FloatingButton = (props) => (
  <button
    className="  floating-btn"
    onClick={() => props.action && props.action()}
    tabIndex={0}
    style={{
      position: props.position || "fixed",
    }}
  >
    <span className="">
      {props.children || (
        <Fragment>
          ^<br />
          Top
        </Fragment>
      )}
    </span>
  </button>
);

export default FloatingButton;
