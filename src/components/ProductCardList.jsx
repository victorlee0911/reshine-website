import React from 'react';

function createListItem(item) {
    return <li>{item}</li>;
}


function ProductCardList (props) {

    return (
            <ul class="card-list">
                {props.list.map(createListItem)}
            </ul>
        
    );
}

export default ProductCardList;
