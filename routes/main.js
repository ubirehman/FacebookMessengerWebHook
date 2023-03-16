const express = require('express');

const router = express.Router();


const adminController = require('../controller/admin');






router.get('/', adminController.Home);
router.get('/webhook', adminController.getWebhook);
router.get('/webhook', adminController.postWebhook);



module.exports = router;