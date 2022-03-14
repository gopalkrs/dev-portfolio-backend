import React, { useState, useEffect } from "react";
import "./styles/Section.css";
import Form from "./Form";
import UserProfiles from "./UserProfiles";

function Section() {

    const [inputData, setInputData] = useState([]);

    const [styles, setStyles] = useState({
        visibility: "",
        opacity: ""
    });

    useEffect(() => {
        fetch(`/api/users`)
        .then((response)=>response.json())
        .then((data)=>{
            setInputData(data);
        });
    },[inputData]);

    const addClick = (e) => {
        setStyles({
            visibility: "visible",
            opacity: "1"
        })
    }

    const searchHandler = () => {

    }
    return (
        <div>
            <h2 className="sub-heading">Explore Developer Profiles</h2>
            <div className="search-border" style={{display: inputData?'block': 'none'}} >
                <div className="search-box">
                    <input type="text" placeholder="Search Profile" id="search" size="25"/>
                </div>
            </div>
            <div className="user-profiles">
                {inputData?.map((input) => (
                    <UserProfiles gitUsername={input.login} key={input.login} />
                ))}
            </div>
            <div>
                <Form styles={styles} setStyles={setStyles} />
            </div>
            <div className="add-profile-button">
                <p className="add-developers">Could not find what you were looking for?</p>
                <button id="add-users" onClick={addClick}>Add Profile</button>
            </div>
        </div>

    );
}

export default Section;