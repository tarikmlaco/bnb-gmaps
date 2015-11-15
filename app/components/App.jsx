import AltContainer from 'alt-container';
import React from 'react';
import Searchbar from './Searchbar.jsx';
import PlaceStore from '../stores/PlaceStore';
import Places from './Places.jsx';
import Map from './Map.jsx';
import Filters from './Filters.jsx';


export default class App extends React.Component {

	render() {
		//Note to self: keep the state immutable

		return (
			<div>
				<Searchbar className="search-bar" />
				<Filters className="filters" />
				<AltContainer stores={[PlaceStore]} inject={{ places: (props) => { return PlaceStore.getState().places || [] }}}>
					<Map />
					<Places />
				</AltContainer>
			</div>
		);
	}

}
