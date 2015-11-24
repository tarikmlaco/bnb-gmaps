import React from 'react';
import PlaceActions from '../actions/PlaceActions';
import PlaceStore from '../stores/PlaceStore';
import ComponentHandler from '../libs/material';

export default class Filters extends React.Component {
	constructor(props) {
		super(props);

		this.filters = [
			{
				value: 'entertainment',
				text: 'Entertainment'
			},
			{
				value: 'government',
				text: 'Government'
			},
			{
				value: 'attraction',
				text: 'Attraction'
			},
			{
				value: 'religious',
				text: 'Religious'
			},
			{
				value: 'educational',
				text: 'Educational'
			}];

		this.setFilter = this.setFilter.bind(this);
		this.renderFilter = this.renderFilter.bind(this);
	}

	componentDidUpdate(){
		ComponentHandler.upgradeDom();
	}

	render() {
		const filters = this.filters;

		return (
			<div className="filters mdl-cell--12-col">{filters.map(this.renderFilter)}</div>
		);
	}

	renderFilter(filter) {
		return <button id={filter.value} className="mdl-button mdl-js-button mdl-js-ripple-effect" onClick={this.setFilter} value={filter.value}>{filter.text}</button>;
	}

	setFilter(e) {
		
		const filter = e.target.value;

		PlaceActions.fetch({filter: filter, query: null});
		console.log('PlaceActions called!');
	}

}