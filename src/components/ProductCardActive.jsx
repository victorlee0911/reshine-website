import React from 'react';
import ProductCardList from './ProductCardList';

function ProductCardActive (props) {


    return (
        <button onClick={props.handleClick} class="active-section section-item blue">
            <img src={props.img} alt={props.alt} />
            <div class="text-section section-title">
                <h3 class="card-title" style={{color: '#F9F7F7'}}>{props.title}</h3>
                <ul>
                    <ProductCardList list={props.list} />
                </ul>
            </div>
        </button>
    );
}

export default ProductCardActive;