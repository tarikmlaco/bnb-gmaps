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

		$.post('http://localhost:3000/places', {query: _query}, (response)=>{
			this.setState({
				places: response,
				filter: _filter,
				query: _query
			})
		});
		
	}
}

export default alt.createStore(PlaceStore, 'PlaceStore');