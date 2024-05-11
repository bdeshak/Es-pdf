const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pdf-to-word');
});


module.exports = router;
