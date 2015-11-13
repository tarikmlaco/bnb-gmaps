import alt from '../libs/alt';
import PlaceActions from '../actions/PlaceActions';
import dummylib from '../libs/dummylib';

class PlaceStore {

	constructor() {

		this.bindActions(PlaceActions);
		this.places = [];

	}

	fetch({filter, query}) {
		const places = dummylib(filter, query);
		console.log('dummylib called, places: ', places);

		this.setState({
			places: places
		});
	}
}

export default alt.createStore(PlaceStore, 'PlaceStore');