import React from 'react';

export default class Note extends React.Component {
	constructor(props) {
		super(props)

		this.finishEdit = this.finishEdit.bind(this);
		this.checkEnter = this.checkEnter.bind(this);
		this.edit = this.edit.bind(this);
		this.renderEdit = this.renderEdit.bind(this);
		// this.renderTask = this.renderTask.bind(this);
		this.renderValue = this.renderValue.bind(this);
		this.renderDelete = this.renderDelete.bind(this);

		this.state = {
			editing: false
		};
	}


	render() {

		//Note to self: state must be immutable, use const
		const {value, onEdit, ...props} = this.props;
		const editing = this.state.editing;

		return (
		<div {...props}>
			{editing ? this.renderEdit() : this.renderValue()}
		</div>);
	}

	edit() {
		this.setState({
			editing: true
		});
	}

	renderEdit() {
		return <input type="text" autoFocus={true} defaultValue={this.props.value} onBlur={this.finishEdit} onKeyPress={this.checkEnter}/>;
	}

	renderValue() {
		const onDelete = this.props.onDelete;

		return <div onClick={this.edit}><span className="value">{this.props.value}</span>{onDelete ? this.renderDelete() : null }</div>;
	}

	finishEdit(e) {

		this.props.onEdit(e.target.value);

		this.setState({
			editing: false
		});
	}

	checkEnter(e) {
		if(e.key === 'Enter'){
			this.finishEdit(e);
		}
	}

	renderDelete() {
		return <button className="delete" onClick={this.props.onDelete}>X</button>;
	}
}
