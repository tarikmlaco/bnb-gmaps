import AltContainer from 'alt-container';
import React from 'react';
import PlaceActions from '../actions/PlaceActions';
import PlaceStore from '../stores/PlaceStore';

class Searchbar extends React.Component {
	constructor(props) {
		super(props);

		// this.searchPlace = this.searchPlace.bind(this);
		this.finishEdit = this.finishEdit.bind(this);
		this.checkEnter = this.checkEnter.bind(this);

	}

	render() {
		console.log('component re-rendered');
		return(
	      <div className="searchForm" >
	      <AltContainer stores={[PlaceStore]}>
	        <input type="text" placeholder="Looking for..." onKeyPress={this.checkEnter} onBlur={this.finishEdit}/>
	      </AltContainer>
	      </div>
		);
	}

	// searchPlace(query) {
	// 	PlaceActions.fetch(null, query);
	// }

	finishEdit(e) {

		console.log('finishEdit called', e.target.value);

		const query = e.target.value;

		if(query){
			this.props.setQuery(query);
		}
	}

	checkEnter(e) {

		console.log('checkEnter called');

		if(e.key === 'Enter'){
			this.finishEdit(e);
		}
	}
}


export default Searchbar;