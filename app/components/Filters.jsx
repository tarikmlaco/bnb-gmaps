import React from 'react';

export default class Filters extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="categories">
				<div className="category" onClick={this.props.setCategory('entertainment')}>Entertainment</div>
				<div className="category" onClick={this.props.setCategory('government')}>Government</div>
				<div className="category" onClick={this.props.setCategory('attraction')}>Attraction</div>
				<div className="category" onClick={this.props.setCategory('religious')}>Religious</div>
				<div className="category" onClick={this.props.setCategory('educational')}>Educational</div>
			</div>
		);
	}
}