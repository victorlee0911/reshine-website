import React from 'react';
import ProductCard from './ProductCard';





function ProductCardSection (props) {

    function createCard (product) {
        return (
            props.activeCard !== product.id && 
                <ProductCard
                    img = {product.image}
                    alt = {product.alt}
                    title= {product.title}
                    handleClick = {() => {props.updateCard(product.id)}}
                    isActive = {props.activeCard === product.id}
                />
        );
    }

    return (
        <div class="section-flex">
            {props.cards.map(createCard)}
        </div>
    );
}

export default ProductCardSection;