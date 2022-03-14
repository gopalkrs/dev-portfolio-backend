import React from 'react';
import { Link } from "react-router-dom";
import "./styles/Section.css";
import "./styles/UserProfiles.css";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

function UserProfiles({gitUsername}){

    const githubId = gitUsername.toLowerCase();

    const deleteUserHandler= async()=>{
        const promise = await axios.delete(`/api/users/${githubId}`);
        console.log(promise);
    }

    return(
        <div className='profile-link-names'>
            <h3 className="git-id">
                <FontAwesomeIcon icon={faAddressCard} />
                <Link className='link-to-profile' to = {`/${githubId}`}> {githubId}</Link> 
            </h3>
            <div className='delete-user'>
                <button onClick={deleteUserHandler}><FontAwesomeIcon icon={faDeleteLeft} /> </button>
            </div>
        </div> 
    );
}
export default UserProfiles;