var express = require('express'),
    router = express.Router();

router.use('/users', require('./users'));
router.use(require('./home'));
//home page
router.get('/', function(req, res) {
    res.send('This is main controller');
});

module.exports = router;