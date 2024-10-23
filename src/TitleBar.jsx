import React, {useState} from "react";
import PropTypes from 'prop-types';


function TitleBar(props) {
    return(
        <div>
            <h1 style={{color: 'white', fontSize: '1.5rem', fontWeight: '800', fontFamily: 'monospace', textShadow: '2px 2px 10px black'}}>
                {props.heading}
            </h1>
        </div>
    );
}
TitleBar.propTypes = {
    heading: PropTypes.string,
}

export default TitleBar;