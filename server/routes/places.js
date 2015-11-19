var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
	  {
	    "lng": "18.3530048",
	    "lat": "43.8479679",
	    "description": "ad dolor occaecat excepteur exercitation incididunt",
	    "type": "religious",
	    "name": "Rockyard",
	    "id": "5648959036f6880eb51e8cfb"
	  },
	  {
	    "lng": "18.4270807",
	    "lat": "43.8456706",
	    "description": "anim voluptate ex in consequat eu",
	    "type": "attraction",
	    "name": "Zolarex",
	    "id": "56489590d220195a2bebdeb1"
	  },
	  {
	    "lng": "18.3739704",
	    "lat": "43.8448711",
	    "description": "laborum reprehenderit consectetur culpa laboris ad",
	    "type": "government",
	    "name": "Qaboos",
	    "id": "56489590baa1622c1ff7e595"
	  }]);
});

module.exports = router;
