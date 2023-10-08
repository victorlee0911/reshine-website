import React, { useState } from 'react';
import ProductCardList from './ProductCardList';

function ProductCardActive (props) {

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
        class="active-section section-item blue"
        style={{backgroundColor: mouseOver ? '#F9F7F7' : '#112D4E',
        cursor: mouseOver ? 'pointer' : 'none'}}>

            <img src={props.img} alt={props.alt} />
            <div class="text-section section-title">
                <h3 class="card-title" style={{color: mouseOver ? '#112D4E' : '#F9F7F7'}}>{props.title}</h3>
                <ul style={{color: mouseOver ? '#112D4E' : '#F9F7F7'}}>
                    <ProductCardList list={props.list} />
                </ul>
            </div>
        </button>
    );
}

export default ProductCardActive;