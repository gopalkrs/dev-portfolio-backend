let developersList = require('../user-datas/userdata');

const getOneUser=(req, res, next) => {
    const userInfo = developersList[req.params.userId];
    if (userInfo) {
        res.status(201).send(developersList[req.params.userId]);
    }
    else {
        res.send("user doesnt exist");
    }
};

module.exports = getOneUser;
