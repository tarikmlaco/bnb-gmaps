import React from 'react';

export default class Filters extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="categories">
				<div className="category" onClick={this.props.setQuery('entertainment')}>Entertainment</div>
				<div className="category" onClick={this.props.setQuery('government')}>Government</div>
				<div className="category" onClick={this.props.setQuery('attraction')}>Attraction</div>
				<div className="category" onClick={this.props.setQuery('religious')}>Religious</div>
				<div className="category" onClick={this.props.setQuery('educational')}>Educational</div>
			</div>
		);
	}
}