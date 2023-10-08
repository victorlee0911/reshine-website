import React, { useState } from 'react';

function ProductCard (props) {

    const [mouseOver, setMouseOver] = useState(false);

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    return (
        <button onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut} 
        onClick={props.handleClick} 
        class="section-item light-blue"
        style={{backgroundColor: mouseOver ? '#112D4E' : '#F9F7F7',
        cursor: mouseOver ? 'pointer' : 'none'}}>

            <img src={props.img} alt={props.alt} />
            <div class="text-section section-title">
                <h3 class="card-title" style={{color: mouseOver ? '#F9F7F7' : '#112D4E'}}>{props.title}</h3>
            </div>
        </button>
    );
}

export default ProductCard;