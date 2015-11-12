import uuid from 'node-uuid';
import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions';

class NoteStore {

	constructor() {
		this.bindActions(NoteActions);
		this.notes = [];
	}

	create(note) {
		const notes = this.notes;
		note.id = uuid.v4();

		this.setState({
			notes: notes.concat(note)
		});
	}

	update(obj) {
		let notes = this.notes;
		const noteIndex = this.findNote(obj[0]);

		// console.log('in update function, id:', obj[0], ' task: ', obj[1], ' object: ', obj);

		if(noteIndex < 0){
			return;
		}

		notes[noteIndex].task = obj[1];

		this.setState({notes});
	}

	delete(id) {
		const notes = this.notes;
		const noteIndex = this.findNote(id);

		console.log('in delete function, id:', id);

		if(noteIndex < 0){
			return;
		}

		this.setState({
			notes: notes.slice(0, noteIndex).concat(notes.slice(noteIndex + 1))
		});

	}

	findNote(id) {
		const notes = this.notes;
		const noteIndex = notes.findIndex((note) => note.id === id);

		if(noteIndex < 0) {
			console.warn('cannot find the note', notes, 'note id: ' ,id);
		}

		return noteIndex;
	}
}

export default alt.createStore(NoteStore, 'NoteStore');