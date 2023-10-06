import React from 'react';

function ProductCard (props) {
    return (
        <div class="section-item">
            <a href="#"><img src={props.img} alt={props.alt} /></a>
            <div class="text-section"><p>{props.title}</p></div>
        </div>
    );
}

export default ProductCard;