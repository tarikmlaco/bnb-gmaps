import AltContainer from 'alt-container';
import React from 'react';
import PlaceActions from '../actions/PlaceActions';
import PlaceStore from '../stores/PlaceStore';
import ComponentHandler from '../libs/material';

class Searchbar extends React.Component {
	componentDidUpdate(){
		ComponentHandler.upgradeDom();
	}

	constructor(props) {
		super(props);

		// this.searchPlace = this.searchPlace.bind(this);
		this.finishEdit = this.finishEdit.bind(this);
		this.checkEnter = this.checkEnter.bind(this);

	}

	render() {
		// console.log('component re-rendered');
		return(
	      <div className="search-bar">
	      <AltContainer stores={[PlaceStore]}>
	      	<div className="mdl-textfield mdl-js-textfield">
	      		<label className="mdl-button mdl-js-button mdl-button--icon">
		      		<i className="material-icons">search</i>
		      	</label>
				<div className="mdl-textfield-holder">
					<input placeholder="" className="mdl-textfield__input" type="text" onKeyPress={this.checkEnter} onBlur={this.finishEdit}/>
					<label className="mdl-textfield__label">Looking for...</label>
				</div>
			</div>
	      </AltContainer>
	      </div>
		);
	}


	finishEdit(e) {

		// console.log('finishEdit called', e.target.value);

		const query = e.target.value;

		if(query){
			PlaceActions.fetch({filter: null, query: query});
		}
	}

	checkEnter(e) {
		// console.log('checkEnter called');

		if(e.key === 'Enter'){
			this.finishEdit(e);
		}
	}
}


export default Searchbar;