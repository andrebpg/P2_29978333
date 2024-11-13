var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contactanos','activeContact': 'bg-success', 'active': '', 'activeAbout': '', 'activeServices': ''});
});

module.exports = router;
