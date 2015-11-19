import alt from '../libs/alt';
import PlaceActions from '../actions/PlaceActions';
import dummylib from '../libs/dummylib';
import $ from 'webpack-zepto';

class PlaceStore {

	constructor() {

		this.bindActions(PlaceActions);
		this.places = [{}];
		this.filter = '';
		this.query = '';

	}

	fetch({filter, query}) {

		const _filter = filter ? filter : this.filter;
		const _query = query ? query : this.query;

		// const places = dummylib(_filter, _query);

		$.get('http://localhost:3000/places', (response)=>{
			this.setState({
				places: response,
				filter: _filter,
				query: _query
			})
		});

		// console.log('dummylib called, parameters: ', _filter, _query, 'places: ', places.map((place) => place.name));

		// this.setState({
		// 	places: places,
		// 	filter: _filter,
		// 	query: _query
		// });
	}
}

export default alt.createStore(PlaceStore, 'PlaceStore');