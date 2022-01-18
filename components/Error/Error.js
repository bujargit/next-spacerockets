import React from 'react';
// style
import classes from './Error.module.css';

const Error = ({ error }) => (
    <div className={classes.errorContainer}>
        <h3>{error.message} </h3>
    </div> 
);

export default Error;
