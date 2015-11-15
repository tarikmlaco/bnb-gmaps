import alt from '../libs/alt';
import PlaceActions from '../actions/PlaceActions';
import dummylib from '../libs/dummylib';

class PlaceStore {

	constructor() {

		this.bindActions(PlaceActions);
		this.places = [];
		this.filter = '';
		this.query = '';

	}

	fetch({filter, query}) {

		const _filter = filter ? filter : this.filter;
		const _query = query ? query : this.query;

		const places = dummylib(_filter, _query);

		console.log('dummylib called, parameters: ', _filter, _query, 'places: ', places);

		this.setState({
			places: places,
			filter: _filter,
			query: _query
		});
	}
}

export default alt.createStore(PlaceStore, 'PlaceStore');