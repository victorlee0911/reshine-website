import React from 'react';

function createListItem(item) {
    return <li>{item}</li>;
}


function ProductCardList (props) {

    return (
        <p class="card-list">
            <ul>
                {props.list.map(createListItem)}
            </ul>
        </p>
        
    );
}

export default ProductCardList;
