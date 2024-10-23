import React, {useState} from "react";
import PropTypes from 'prop-types';


function TitleBar(props) {
    return(
        <div>
            <h1 style={{color: 'white', fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'monospace'}}>
                {props.heading}
            </h1>
        </div>
    );
}
TitleBar.propTypes = {
    heading: PropTypes.string,
}

export default TitleBar;