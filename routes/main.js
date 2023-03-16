const express = require('express');

const router = express.Router();


const adminController = require('../controller/admin');
router.use(express.json({ type: '*/*' })); 






router.get('/', adminController.Home);

router.get('/webhook', adminController.getWebhook);
router.post('/webhook', adminController.postWebhook);


router.get('/pagewebhook', adminController.getWebhook);
router.post('/pagewebhook', adminController.postWebhook);



module.exports = router;