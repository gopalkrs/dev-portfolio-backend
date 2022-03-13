let developersList = require('../user-datas/userdata');

const getAllUsers = (req, res, next) => {
    let listOfUsers = [];
    Object.keys(developersList).forEach(element => {
        listOfUsers.push(developersList[element]);
    });
    res.send(listOfUsers);
}

module.exports = getAllUsers;
