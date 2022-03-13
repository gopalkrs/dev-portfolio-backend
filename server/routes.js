const express = require('express');
const router = express.Router();

const getAllUsers = require('./routes/getAllUsers');
const postUser = require('./routes/postUser');
const getOneUser = require('./routes/getOneUser');
const deleteUser = require('./routes/deleteUser');



router.get("/", getAllUsers);

router.get("/:userId", getOneUser);

router.post("/", postUser);

router.delete("/:userId", deleteUser);


module.exports = router;