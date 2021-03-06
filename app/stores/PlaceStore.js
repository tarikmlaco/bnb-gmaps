import alt from '../libs/alt';
import PlaceActions from '../actions/PlaceActions';
import $ from 'webpack-zepto';

class PlaceStore {

	constructor() {

		this.bindActions(PlaceActions);
		this.places = [{}];
		this.filter = '';
		this.query = '';

	}

	fetch({filter, query}) {

		const filterstate = filter; // ? filter : this.filter;
		const querystate = query; // ? query : this.query;



		$.post('http://localhost:3000/places', {query: querystate, filter: filterstate}, (response)=>{
			console.log('Fetch called, query:', querystate, ', filter:', filterstate);
			this.setState({
				places: response,
				filter: filterstate,
				query: querystate
			})
		});

	}
}

export default alt.createStore(PlaceStore, 'PlaceStore');