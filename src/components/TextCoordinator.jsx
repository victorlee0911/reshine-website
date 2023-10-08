import React, { useState } from 'react';

import CircleButton from './CircleButton';

const text = ["Creating Cleaner Tomorrow", 
    "Reshine Renewables Inc is a technology company focused the future of energy and adding real values for customers.",
    "We provide turn-key microgrid solutions for the farming industry."];


function TextCoordinator () {

    const [activeButton, setActiveButton] = useState(0);

    return (
        <>
            <div class="cover-text" style={{ fontSize : activeButton === 0 ? '2.5rem' : '1.5rem'}}>{text[activeButton]}</div>
            <div class="button-container blue">
                <CircleButton
                    isActive= {activeButton === 0}
                    handleClick= {() => setActiveButton(0)}
                />
                <CircleButton 
                    isActive= {activeButton === 1}
                    handleClick= {() => setActiveButton(1)}
                />
                <CircleButton 
                    isActive= {activeButton === 2}
                    handleClick= {() =>setActiveButton(2)}
                />
            </div>
        </>
        
    );
}

export default TextCoordinator;
