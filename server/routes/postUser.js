const axios = require('axios');
let developersList = require('../user-datas/userdata');

const postUser = async (req, res, next) => {
    const userData = req.body;
    const { githubId } = userData;
    const arr = githubId.split('/');
    const gitId = arr[arr.length - 1];

    let gitPromise = axios.get(`https://api.github.com/users/${gitId}`);
    let repoPromise = axios.get(`https://api.github.com/users/${gitId}/repos`);
    try {
        Promise.all([gitPromise, repoPromise])
            .then((responses) => {
                let userGitInfo = responses[0].data;
                const repo = responses[1].data;
                //console.log(users);
                if (userGitInfo || repo) {
                    userGitInfo.repos = repo;
                    const { login } = userGitInfo;
                    const gitUsername = login.toLowerCase()
                    developersList[`${gitUsername}`] = { ...userGitInfo, ...userData };
                    return res.status(201).json({
                        status: "Success",
                        message: "User Created.",
                        data: developersList[`${gitUsername}`]
                    });
                }
                else {
                    return res.status(401).json({
                        status: "Failure",
                        message: "Invalid User."
                    });
                }

            })
    }catch (err){
        console.log(err);
        return res.status(401).json({
            status: "Failure",
            message: "Invalid User."
        });
    }
};

module.exports = postUser;
