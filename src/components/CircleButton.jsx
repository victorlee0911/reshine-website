import React from 'react';


function CircleButton (props) {

    return (
        <button onClick={props.handleClick} class="circle-button button" style={{backgroundColor: props.isActive ? "skyblue" : "white" }}></button>
    );
}

export default CircleButton;
