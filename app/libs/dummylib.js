import uuid from 'node-uuid';

export default function(filter, query) {
	var places = [{
		id: uuid.v4(),
		name: 'Scumm Bar',
		type: 'entertainment',
		description: 'Where all ye pirates come',
		lat: 43.819784,
		lng: 18.40543735
	},
	{
		id: uuid.v4(),
		name: 'Mayor\'s Manor',
		type: 'government',
		description: 'This is where Elaine lives',
		lat: 43.87863957,
		lng: 18.44026375
	},
	{
		id: uuid.v4(),
		name: 'The Swamp',
		type: 'attraction',
		description: 'Approach thee if you dare',
		lat: 43.7857855,
		lng: 18.28717921
	},
	{
		id: uuid.v4(),
		name: 'The First Church of LeChuck',
		type: 'religious',
		description: 'You must be *this* tall to ride this ride',
		lat: 43.78138862,
		lng: 18.49717975
	},
	{
		id: uuid.v4(),
		name: 'The Answer',
		type: 'educational',
		description: '42',
		lat: 43.80659616,
		lng: 18.29797162
	}];

	return places;
}