let developersList = require('../user-datas/userdata');

const deleteUser = (req, res, next) => {
    const githubId = req.params.userId;
    try {
        if (developersList[githubId]) {
            delete developersList[githubId];
            res.status(200).json({
                status: "Deleted",
                message: "user deleted",
                data: developersList
            });
        }
        else{
            res.status(200).json({
                status: "Failed",
                message: "User Not Found",
                data: developersList
            });
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = deleteUser;