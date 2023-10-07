import React from 'react';
import CoverPhoto from '../assets/Cover Picture.jpg';
import Logo from '../assets/Logo Transparent.png';

import TextCoordinator from './TextCoordinator';

function Cover () {



    return (
        <div class="cover-section white-blue">
            <div class="overlay">
                <img class="cover-logo" src={Logo} alt="Reshine Logo" />
                
                <TextCoordinator />
            </div>
            <img class="cover-photo" src={CoverPhoto} alt="microgrid renewable energy" />
        </div>

    );
}

export default Cover;
