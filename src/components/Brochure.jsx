import React from 'react';



function Brochure () {
    return (
        <div class="section brochure white-blue">
            <div class="section-title">
                <h2>Brochure:</h2>
            </div>
            
            <div class="section-flex">
                <a href={require("../assets/ReshineBrochure.pptx")} download="ReshineBrochure"><button class="learn-more">Learn More</button></a>

            </div>

        </div>

    );
}

export default Brochure;
