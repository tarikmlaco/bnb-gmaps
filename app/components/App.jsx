import AltContainer from 'alt-container';
import React from 'react';
import Searchbar from './Searchbar.jsx';
import PlaceStore from '../stores/PlaceStore';
import Places from './Places.jsx';
import Map from './Map.jsx';
import Filters from './Filters.jsx';
import ComponentHandler from '../libs/material';

export default class App extends React.Component {

	componentDidUpdate(){
		ComponentHandler.upgradeDom();
	}

	render() {
		//Note to self: keep the state immutable
		return (
			<div className="mdl-layout">
				<div className="mdl-grid">
					<div className="mdl-card mdl-shadow--2dp mdl-cell--2-col">
						<div className="mdl-grid">
							<Searchbar />
							<Filters className="filters" />
						</div>
					</div>
					<div className="mdl-cell--12-col">
					<AltContainer stores={[PlaceStore]} inject={{ places: (props) => { return PlaceStore.getState().places || [] }}}>
						<Map className="mdl-cell mdl-cell--4-col"/>
						<Places className="mdl-cell mdl-cell--4-col" />
					</AltContainer>
					</div>
				</div>
			</div>
		);
	}
}