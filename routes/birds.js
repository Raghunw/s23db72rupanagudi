var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('birds', { title: 'Search results for birds' });
});

module.exports = router;