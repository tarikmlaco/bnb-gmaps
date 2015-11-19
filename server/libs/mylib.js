var Fuse = require('./fuse');

module.exports = (function(){

	var places = [
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
	  },
	  {
	    "lng": "18.3802622",
	    "lat": "43.8534605",
	    "description": "nulla nulla fugiat labore duis esse",
	    "type": "religious",
	    "name": "Ewaves",
	    "id": "56489590afea7f82f0145259"
	  },
	  {
	    "lng": "18.3424226",
	    "lat": "43.859047",
	    "description": "non do duis velit nostrud est",
	    "type": "religious",
	    "name": "Qualitex",
	    "id": "56489590f8fc8af4d1cf8a50"
	  },
	  {
	    "lng": "18.4064517",
	    "lat": "43.852293",
	    "description": "labore nisi ea occaecat consectetur cupidatat",
	    "type": "religious",
	    "name": "Techmania",
	    "id": "56489590c0c2da71f4d909ce"
	  },
	  {
	    "lng": "18.4646692",
	    "lat": "43.8515465",
	    "description": "sint id tempor ullamco exercitation consectetur",
	    "type": "educational",
	    "name": "Columella",
	    "id": "56489590312a69c11744bf34"
	  },
	  {
	    "lng": "18.3813117",
	    "lat": "43.8533827",
	    "description": "nulla fugiat labore reprehenderit ea nulla",
	    "type": "entertainment",
	    "name": "Melbacor",
	    "id": "56489590547506006918ac46"
	  },
	  {
	    "lng": "18.4604025",
	    "lat": "43.8549832",
	    "description": "aliquip laborum culpa quis cupidatat anim",
	    "type": "religious",
	    "name": "Mondicil",
	    "id": "56489590f32b210824e12bba"
	  },
	  {
	    "lng": "18.434784",
	    "lat": "43.8577533",
	    "description": "eiusmod adipisicing Lorem cupidatat deserunt labore",
	    "type": "government",
	    "name": "Singavera",
	    "id": "56489591f066a96729aec04a"
	  },
	  {
	    "lng": "18.3455963",
	    "lat": "43.8571764",
	    "description": "commodo cupidatat velit nulla ex tempor",
	    "type": "government",
	    "name": "Enjola",
	    "id": "56489591016d7cea8fec3ae3"
	  },
	  {
	    "lng": "18.4664255",
	    "lat": "43.8562579",
	    "description": "ad mollit ad consectetur proident cupidatat",
	    "type": "attraction",
	    "name": "Eargo",
	    "id": "56489591158464e09a9d7174"
	  },
	  {
	    "lng": "18.3399909",
	    "lat": "43.8438991",
	    "description": "culpa quis reprehenderit laboris sint consectetur",
	    "type": "attraction",
	    "name": "Isologica",
	    "id": "564895910f159a6c71e2d0de"
	  },
	  {
	    "lng": "18.3998067",
	    "lat": "43.856281",
	    "description": "ipsum proident do ullamco eu sit",
	    "type": "attraction",
	    "name": "Optique",
	    "id": "56489591cfd26fa2251780ce"
	  },
	  {
	    "lng": "18.4075905",
	    "lat": "43.8556218",
	    "description": "do culpa reprehenderit ullamco velit Lorem",
	    "type": "educational",
	    "name": "Perkle",
	    "id": "56489591fd5224db67b2340d"
	  },
	  {
	    "lng": "18.3399633",
	    "lat": "43.857024",
	    "description": "nulla deserunt occaecat occaecat qui est",
	    "type": "attraction",
	    "name": "Digifad",
	    "id": "56489591a3dab18d04a59cea"
	  },
	  {
	    "lng": "18.4417888",
	    "lat": "43.8575571",
	    "description": "elit magna elit ut consequat irure",
	    "type": "entertainment",
	    "name": "Zork",
	    "id": "564895914e2d18e7f6a79dcd"
	  },
	  {
	    "lng": "18.3705083",
	    "lat": "43.8591086",
	    "description": "officia labore commodo adipisicing dolor nisi",
	    "type": "government",
	    "name": "Eventage",
	    "id": "56489591c453787ce95317cb"
	  },
	  {
	    "lng": "18.4331626",
	    "lat": "43.852216",
	    "description": "ad eiusmod cillum officia consectetur sint",
	    "type": "religious",
	    "name": "Injoy",
	    "id": "564895913ea34c64729f70fe"
	  },
	  {
	    "lng": "18.3730163",
	    "lat": "43.8460867",
	    "description": "aute mollit laborum sint proident aliquip",
	    "type": "religious",
	    "name": "Earthwax",
	    "id": "5648959111c4d0467d44759d"
	  }
	];

	var options = {
		keys: ['name', 'type']
	};

	var fuse = new Fuse(places, options);

	var isProperString = function(string) {
		return !((string === null) || (string === undefined) || (string === ''));
	};

	var searchFun = function(query, filter) {

		if (isProperString(query)){

			if(isProperString(filter)){
				return fuse.search(query).filter(function(place) {return place.type === filter});
			} else {
				return fuse.search(query);
			}

		} else {

			if(isProperString(filter)){
				return places.filter(function(place) { return place.type === filter });
			} else {
				return places;
			}
		}
	}


	return {
		search: searchFun
	};
	
})();