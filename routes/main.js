const express = require('express');

const router = express.Router();

const adminController = require('../controller/admin');
const entryController = require('../controller/entries');

const multer = require('multer');

router.get('/', adminController.Home);



module.exports = router;