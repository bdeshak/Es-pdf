const express = require('express');
const router = express.Router();

router.get('/ytmate', (req, res) => {
    res.render('ytmate');
});


module.exports = router;
