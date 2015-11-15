import React from 'react';
import PlaceActions from '../actions/PlaceActions';
import PlaceStore from '../stores/PlaceStore';

export default class Filters extends React.Component {
	constructor(props) {
		super(props);

		this.setFilter = this.setFilter.bind(this);
	}

	render() {
		return (
			<div className="categories">
				<button className="category" onClick={this.setFilter} value={'entertainment'}>Entertainment</button>
				<button className="category" onClick={this.setFilter} value={'government'}>Government</button>
				<button className="category" onClick={this.setFilter} value={'attraction'}>Attraction</button>
				<button className="category" onClick={this.setFilter} value={'religious'}>Religious</button>
				<button className="category" onClick={this.setFilter} value={'educational'}>Educational</button>
			</div>
		);
	}

	setFilter(e) {
		
		const filter = e.target.value;
		// console.log('setFilter called: ', e.target.value);
		PlaceActions.fetch({filter: filter, query: null});
	}

}