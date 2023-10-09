import React from 'react';
import AboutProfile from './AboutProfile';

const members = [
    {
        id: 0,
        name: "John Wang",
        position: "CPO",
        image: {},
        profile: ["(1)(858)449-1069", "(86)18844591896"]
    },
    {
        id: 1,
        name: "John Wang",
        email: "john@reshine-re.com",
        phone: ["(1)(626)922-5658"]
    }
]

function About () {

    function createProfiles(member){
        return (
            <AboutProfile
                name = {member.name}
                position = {member.position}
                img = {member.image}
                profile = {member.profile}
            />
        )
    }

    return (
        <div class="section white-blue">
            <h1 class="section-title">About</h1>
            <div class="section-flex">
                <h2>WIP</h2>
            </div>


        </div>

    );
}

export default About;
