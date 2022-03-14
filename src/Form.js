import "./styles/Section.css";
import React, { useState } from "react";
import axios from "axios";

function Form({ styles, setStyles}){

    const [formData, setFormData] = useState({
        githubId: "",
        linkedinId: "",
        twitterId: "",
        mediumId: "",
        hackerrankId: "",
        instagramId: ""
    });
    const cancelClick=()=>{
        setStyles({
            visibility: "hidden",
            opacity:"0"
        });
        setFormData({
            githubId: "",
            linkedinId: "",
            twitterId: "",
            mediumId: "",
            hackerrankId: "",
            instagramId: ""
        });
    }

    const handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [name]: value});
    }

    const formAction = async (e) => {
        e.preventDefault();
        try{
            const promise = await axios.post(`/api/users`, formData);
            console.log(promise);
        }catch(err){
            console.log(err);
        }
        cancelClick();

    };

    return (
        <div>
        <div className="modal-bg" style={{ visibility: styles.visibility, opacity: styles.opacity }}>
            <div className="user-details-div">
                <h3 className="modal-bg-header">Add Developer Profile</h3>
                <form method="POST" action="/" className="developer-form" onSubmit={formAction}>
                    <div className="input-fields-section">
                        <label htmlFor="githubId"><i className="fab fa-github"></i> Github*</label><br />
                        <input type="text" name="githubId" id="githubId" required value={formData.githubId} onChange={handleChange} /><br /><br />
                        <label htmlFor="linkedinId"><i className="fab fa-linkedin"></i> Linkedin</label><br />
                        <input type="text" name="linkedinId" id="linkedinId" value={formData.linkedinId} onChange={handleChange}/><br /><br />
                        <label htmlFor="twitterId"><i className="fab fa-twitter-square"></i> Twitter</label><br />
                        <input type="text" name="twitterId" id="twitterId" value={formData.twitterId} onChange={handleChange}/><br /><br />
                        <label htmlFor="mediumId"><i className="fab fa-medium"></i> Medium</label><br />
                        <input type="text" name="mediumId" id="mediumId" value={formData.mediumId} onChange={handleChange}/><br /><br />
                        <label htmlFor="hackerrankId"><i className="fab fa-hackerrank"></i> HackerRank</label><br />
                        <input type="text" name="hackerrankId" id="hackerrankId" value={formData.hackerrankId} onChange={handleChange}/><br /><br />
                        <label htmlFor="instagramId"><i className="fab fa-instagram"></i> Instagram</label><br />
                        <input type="text" name="instagramId" id="instagramId" value={formData.instagramId} onChange={handleChange}/><br /><br />
                        <div className="submit-cancel">
                            <input id="submit-btn" type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
                <button className="cancel-btn" onClick={cancelClick}>Cancel</button>
            </div>
        </div>
    </div>
    );
}

export default Form;