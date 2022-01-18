import React from "react";
import classes from "./Loader.module.css";

const Loader = () => (
  <div className={classes.loaderContainer}>
    <p>
      <span role="img" aria-label="rocket" className="mr-4">
        🚀
      </span>
      Loading
    </p>
    <div className={classes.loaderDotsAnimation}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);

export default Loader;
