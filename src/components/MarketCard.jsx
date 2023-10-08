import React from 'react';
import ProductCardList from './ProductCardList';

function MarketCard (props) {

    return (
        <div class="section-item">
            <h3 class="card-title section-title text-section">{props.title}</h3>
            <img src={props.img} alt={props.alt} />
            <div class="section-title text-section">
                
                <ProductCardList list={props.list} />
            </div>
        </div>
    );
}

export default MarketCard;