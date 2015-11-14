import React from 'react';
import PlaceActions from '../actions/PlaceActions';
import PlaceStore from '../stores/PlaceStore';

export default class Filters extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="categories">
				<div className="category" onClick={this.props.setFilter('entertainment')}>Entertainment</div>
				<div className="category" onClick={this.props.setFilter('government')}>Government</div>
				<div className="category" onClick={this.props.setFilter('attraction')}>Attraction</div>
				<div className="category" onClick={this.props.setFilter('religious')}>Religious</div>
				<div className="category" onClick={this.props.setFilter('educational')}>Educational</div>
			</div>
		);
	}
}