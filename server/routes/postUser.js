const axios = require('axios');
let developersList = require('../user-datas/userdata');

const postUser = (req, res, next) => {
    const userData = req.body;
    const { githubId } = userData;
    const arr = githubId.split('/');
    const gitId = arr[arr.length - 1];
    try {
        let gitPromise = axios(`https://api.github.com/users/${gitId}`);
        let repoPromise = axios(`https://api.github.com/users/${gitId}/repos`);

        Promise.all([gitPromise, repoPromise])
            .then((responses) => {
                let userGitInfo = responses[0].data;
                const repo = responses[1].data;
                userGitInfo.repos = repo;
                developersList[`${gitId}`] = { ...userGitInfo, ...userData };
                //console.log(users);
                if (userGitInfo || repo) {
                    return res.status(201).json({
                        status: "Success",
                        message: "User Created.",
                        data: developersList[`${gitId}`]
                    });
                }
                else {
                    return res.status(401).json({
                        status: "Failure",
                        message: "Wrong Link Entered."
                    });
                }

            })
            .catch(console.log("Wrong Username received."));
    } catch (err) {
        console.log(err);
    }
};

module.exports = postUser;
