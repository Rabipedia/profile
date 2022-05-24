import React from 'react';
import Bio from './bio';
import Links from './Links';
import './profile.css';
import Skills from './Skills';


class Profile extends React.Component {

    render(){
        return (
            <div className='Container'>
                <Bio/>
                <Skills/>
                <Links/>
            </div>
        )
    }
}

export default Profile;