import React from 'react';

export default class Note extends React.Component {
	constructor(props) {
		super(props)

		this.finishEdit = this.finishEdit.bind(this);
		this.checkEnter = this.checkEnter.bind(this);
		this.edit = this.edit.bind(this);
		this.renderEdit = this.renderEdit.bind(this);
		this.renderTask = this.renderTask.bind(this);

		this.state = {
			editing: false;
		};
	}


	render() {

		//Note to self: state must be immutable, use const
		const editing = this.state.editing;

		return <div>{this.props.task}</div>;
	}
}
