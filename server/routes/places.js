var express = require('express');
var router = express.Router();
var myFuse = require('../libs/mylib');


/* GET users listing. */
router.get('/', function(req, res, next) {;

	  res.json(myFuse.search('Rockyard'));
});

router.post('/', function(req, res, next){

	res.json(myFuse.search(req.body.query, req.body.filter));
});

module.exports = router;
