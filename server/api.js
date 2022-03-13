const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
const routes = require('./routes');

router.use("/users", routes);

module.exports = router;