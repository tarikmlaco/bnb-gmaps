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
		// ComponentHandler.upgradeDom();
	}

	render() {

		return (
			<div className="mdl-layout">
				<header className="mdl-layout__header">
					<div className="mdl-layout__header-row">
						<span className="mdl-layout-title">MOP Places</span>
						<div className="mdh-expandable-search">
						<i className="material-icons">search</i>
							<Searchbar />
						</div>
					</div>
				</header>
				<main className="mdl-layout__content">
    				<div className="page-content mdl-grid">
    					<div className="mdl-cell--8-col">
	    					<AltContainer stores={[PlaceStore]} inject={{ places: (props) => { return PlaceStore.getState().places || [] }}}>
	    						<Map />
	    					</AltContainer>
    					</div>
    					<div className="mdl-cell--4-col">
    						<Filters />
    						<AltContainer stores={[PlaceStore]} inject={{ places: (props) => { return PlaceStore.getState().places || [] }}}>
	    						<Places />
	    					</AltContainer>
    					</div>
    				</div>
  				</main>
			</div>
		);
	}
}


/*
<div className="mdl-layout">
	<header className="mdl-layout__header">
		<div className="mdl-card mdl-shadow--2dp mdl-cell--12-col">
			<div className="mdl-grid">
				<Searchbar />
				<br/>
				<Filters className="filters" />
			</div>
		</div>
		<div className="mdl-cell--12-col">
		<AltContainer stores={[PlaceStore]} inject={{ places: (props) => { return PlaceStore.getState().places || [] }}}>
			<Map className="mdl-cell mdl-cell--6-col"/>
			<Places className="mdl-cell mdl-cell--6-col" />
		</AltContainer>
		</div>
	</header>
</div>
*/