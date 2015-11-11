import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: [
				{
					id: uuid.v4(),
					task: 'Learn Webpack'
				},
				{
					id: uuid.v4(),
					task: 'Learn React'
				},
				{
					id: uuid.v4(),
					task: 'Do laundry'
				}
			]
		};

		//Note to self: Always bind 'this', so it wouldn't point at a wrong object.
		this.addNote = this.addNote.bind(this);
	}

	render() {
		const notes = this.state.notes;

		return (
			<div>
				<button className="add-note" onClick={this.addNote}>+</button>
				<Notes items={notes} />
			</div>
		);
	}

	addNote() {
		this.setState({
			notes: this.state.notes.concat([{
				id: uuid.v4(),
				task: 'New note'
			}])
		});
	}
}
