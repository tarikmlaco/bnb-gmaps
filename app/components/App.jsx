// import uuid from 'node-uuid';
import AltContainer from 'alt-container';
import React from 'react';
import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';
import Searchbar from './Searchbar.jsx';
import PlaceStore from '../stores/PlaceStore';
import Places from './Places.jsx';
import Map from './Map.jsx';
import Filters from './Filters.jsx';
import PlaceActions from '../actions/PlaceActions';

export default class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			query: '',
			filter: ''
		}

		this.setFilter = this.setFilter.bind(this);
		this.setQuery = this.setQuery.bind(this);
	}

	render() {
		//Note to self: keep the state immutable

		return (
			<div>
				<Searchbar setQuery={this.setQuery}/>
				<Filters setFilter={this.setFilter}/>
				<AltContainer stores={[PlaceStore]} inject={{ places: PlaceStore.getState().places || [] }}>
					<Places />
					<Map />
				</AltContainer>
			</div>
		);
	}

	setFilter(filter) {
		// this.setState({filter: filter});
		PlaceActions.fetch({this.state.filter, this.state.query});
		this.setState({filter: filter});
	}

	setQuery(query) {
		// this.setState({query: query});
		PlaceActions.fetch({ this.state.filter, this.state.query});
		this.setState({query: query});
	}

}
