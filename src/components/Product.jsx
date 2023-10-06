import React from 'react';
import Product1 from '../assets/Product (Microgrid).png'
import Product2 from '../assets/Product (BESS).png';
import Product3 from '../assets/Product (Solar).png';
import Product4 from '../assets/Product (Horticultural).png';
import ProductCard from './ProductCard';

function Product () {
    return (
        <div class="section product blue">
            <div class="section-title">
                <h2>Products</h2>
            </div>
            <div class="section-flex">
                <ProductCard 
                    img = {Product1}
                    alt ="best"
                    title= "testing"
                 />
                 <ProductCard 
                    img = {Product2}
                    alt ="best"
                    title= "testing"
                 />
                 <ProductCard 
                    img = {Product3}
                    alt ="best"
                    title= "testing"
                 />
                 <ProductCard 
                    img = {Product4}
                    alt ="best"
                    title= "testing"
                 />
            </div>
        </div>
    );
}

export default Product;