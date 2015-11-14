// import uuid from 'node-uuid';
import AltContainer from 'alt-container';
import React from 'react';
import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';
import Searchbar from './Searchbar.jsx';
import PlaceStore from '../stores/PlaceStore';
import Places from './Places.jsx';
import Map from './GMaps.jsx';

export default class App extends React.Component {

	render() {
		//Note to self: keep the state immutable

		return (
			<div>
				<Searchbar/>
				<AltContainer stores={[PlaceStore]} inject={{ places: PlaceStore.getState().places || [] }}>
					<Places />
					<Map />
				</AltContainer>
			</div>
		);
	}

	addItem() {
		LaneActions.create({name: 'New lane'});
	}
}
