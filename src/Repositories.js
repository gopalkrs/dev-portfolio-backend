import React from 'react';
import "./styles/ProfilePage.css";

function Repositories({name,description,url}){
    return(
        <div>
            <div className='repo-name-description'>
            <h3 className='repo-name'><a className='link-repo' href={`${url}`}>{name}</a></h3>
                <p>{description}</p>
            </div>
        </div>
    );
}
export default Repositories;