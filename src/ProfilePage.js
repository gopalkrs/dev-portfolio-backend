import React, { useState, useEffect } from "react";
import "./styles/ProfilePage.css";
import { Link } from "react-router-dom";
import Repositories from "./Repositories";
import Footer from "./Footer";

function ProfilePage(props) {

    const [userInfo, setUserInfo] = useState();
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const gitUsername = props.match.params.gitUsername;
        fetch(`/api/users/${gitUsername}`)
            .then((response) => response.json())
            .then((info) => {
                setUserInfo(info);
                setRepositories(info.repos);
            })
    }, []);

    console.log(userInfo);
    console.log(repositories);
    return (
        <div>
            <div className="profilepage-header">
                <div><h3>The Developer Profile</h3></div>
                <div className="link-homepage">
                    <Link to="/">
                        <h3>All Developers</h3>
                    </Link>
                </div>
            </div>
            <div className="userprofile-box">
                <img className="profile_picture" src={userInfo?.avatar_url} alt="profile_picture" />
                <div>
                    <h1 className="userprofile-name">{userInfo?.name}</h1>
                    <p className="location"><i class="fas fa-map-marker-alt"></i> {userInfo?.location}</p>
                    <p className="userprofile-para">Worked at <b>{userInfo?.company}</b></p>
                    <p className="userprofile-para">{userInfo?.bio}</p><br />
                    <div className="account-links">
                        <a href={`${userInfo?.html_url}`}><i className="fab fa-github"></i></a>
                        <a href={`${userInfo?.linkedinId}`}><i className="fab fa-linkedin"></i></a>
                        <a href={`${userInfo?.twitterId}`}><i className="fab fa-twitter-square"></i></a>
                        <a href={`${userInfo?.mediumId}`}><i className="fab fa-medium"></i></a>
                        <a href={`${userInfo?.hackerrankId}`}><i className="fab fa-hackerrank"></i></a>
                        <a href={`${userInfo?.instagramId}`}><i className="fab fa-instagram"></i></a>
                    </div>
                    <p></p>
                </div>

            </div>
            <h1 className="github-repo">Github Repositories</h1>
            <div>
                {
                    repositories?.map((repo) => (
                        <Repositories name={repo.name} description={repo.description} key={repo.name} url={repo.clone_url} />
                    ))
                }
            </div>
            <Footer />
        </div>
    );
}

export default ProfilePage;