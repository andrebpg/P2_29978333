var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Proyectos y Remodelaciones Jr', 'active': 'bg-success', 'activeContact': '', 'activeAbout': '','activeServices': ''});
});

module.exports = router;
