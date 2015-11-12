// import uuid from 'node-uuid';
import AltContainer from 'alt-container';
import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class App extends React.Component {
/*	

constructor(props) {
		super(props);

		// this.state = {
		// 	notes: [
		// 		{
		// 			id: uuid.v4(),
		// 			task: 'Learn Webpack'
		// 		},
		// 		{
		// 			id: uuid.v4(),
		// 			task: 'Learn React'
		// 		},
		// 		{
		// 			id: uuid.v4(),
		// 			task: 'Do laundry'
		// 		}
		// 	]
		// };

		//Note to self: Always bind 'this', so it wouldn't point at a wrong object.
		// this.addNote = this.addNote.bind(this);
		// this.editNote = this.editNote.bind(this);
		// this.deleteNote = this.deleteNote.bind(this);
		this.storeChanged = this.storeChanged.bind(this);
		this.state = NoteStore.getState();

	}

	componentDidMount() {
		NoteStore.listen(this.storeChanged);
	}

	componentWillUnmount() {
		NoteStore.unlisten(this.storeChanged);
	}

	storeChanged(state) {
		this.setState(state);
	}

*/
	render() {
		//Note to self: keep the state immutable
		// const notes = this.state.notes;

		return (
			<div>
				<button className="add-note" onClick={this.addNote}>+</button>
				<AltContainer stores={[NoteStore]} inject={{ items: () => NoteStore.getState().notes }}>
					<Notes /*items={notes}*/ onEdit={this.editNote} onDelete={this.deleteNote}/>
				</AltContainer>
			</div>
		);
	}

	addNote() {
		NoteActions.create({task: 'New task'});
	}

	editNote(id, task) {
		NoteActions.update(id, task);
	}

	deleteNote(id) {
		NoteActions.delete(id);
	}

	// addNote() {
	// 	this.setState({
	// 		notes: this.state.notes.concat([{
	// 			id: uuid.v4(),
	// 			task: 'New note'
	// 		}])
	// 	});
	// }

	// editNote(id, task) {
	// 	let notes = this.state.notes;
	// 	const noteIndex = this.findNote(id);

	// 	if(noteIndex < 0){
	// 		return;
	// 	}

	// 	notes[noteIndex].task = task;

	// 	this.setState({notes});
	// }

	// findNote(id) {
	// 	const notes = this.state.notes;
	// 	const noteIndex = notes.findIndex((note) => note.id === id);

	// 	if(noteIndex < 0){
	// 		console.log('couldn\'t find note :(');
	// 	}

	// 	return noteIndex;
	// }

	// deleteNote(id) {
	// 	const notes = this.state.notes;
	// 	const noteIndex = notes.findIndex((note) => note.id === id);

	// 	if(noteIndex < 0){
	// 		return;
	// 	}

	// 	this.setState(notes.splice(noteIndex, 1));
	// }
}
