import React from 'react';

function ContactCard (props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <ul>
                <li>{props.email}</li>
                {props.phone.map((item) => <li>{item}</li>)}
            </ul>


        </div>

    );
}

export default ContactCard;
