import React from 'react';

function ProductCard (props) {
    return (
        <button onClick={props.handleClick} class="section-item blue">
            <img src={props.img} alt={props.alt} />
            <div class="text-section section-title">
                <h3 class="card-title">{props.title}</h3>
            </div>
        </button>
    );
}

export default ProductCard;