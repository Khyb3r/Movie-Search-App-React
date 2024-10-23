import React, {useState} from "react";
import PropTypes from 'prop-types';
import styles from './TitleBar.module.css';


function TitleBar(props) {
    return(
        <div>
            <h1>{props.heading}</h1>
        </div>
    );
}
TitleBar.propTypes = {
    heading: PropTypes.string,
}

export default TitleBar;