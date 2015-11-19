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

		this.finishEdit = this.finishEdit.bind(this);
		this.checkEnter = this.checkEnter.bind(this);

	}

	render() {

		return(
	      <AltContainer stores={[PlaceStore]}>
				<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
					<input className="mdl-textfield__input" type="text" onKeyPress={this.checkEnter} onBlur={this.finishEdit}/>
					<label className="mdl-textfield__label">Looking for...</label>
				</div>
	      </AltContainer>
		);
	}


	finishEdit(e) {

		const query = e.target.value;

		if(query){
			PlaceActions.fetch({filter: null, query: query});
		}
	}

	checkEnter(e) {

		if(e.key === 'Enter'){
			this.finishEdit(e);
		}
	}
}


export default Searchbar;