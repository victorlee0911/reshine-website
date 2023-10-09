import React from 'react';
import ContactCard from './ContactCard';
import CoverPhoto from '../assets/Cover Picture.jpg';

const contacts = [
    {
        id: 0,
        name: "Deli Wang",
        email: "deli@reshine-re.com",
        phone: ["(1)(858)449-1069", "(86)18844591896"]
    },
    {
        id: 1,
        name: "John Wang",
        email: "john@reshine-re.com",
        phone: ["(1)(626)922-5658"]
    }
]

function Contact () {

    function createContactCard(contact){
        return (
            <ContactCard
                name = {contact.name}
                email = {contact.email}
                phone = {contact.phone}
            />
        )
    }

    return (
        <div id="contact-page" class="section">
            <img id="contact-page-photo" src={CoverPhoto} alt="microgrid renewable energy" />
            <h1 class="section-title">Contacts</h1>
            <div class="section-flex">
                {contacts.map(createContactCard)}
                <ContactCard
                    name="www.reshine-re.com"
                    email="20830 Stevens Creek Blvd, #1167"
                    phone= {["Cupertino, CA 95014, USA"]}
                />
            </div>


        </div>

    );
}

export default Contact;
