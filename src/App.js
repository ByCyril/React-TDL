import React, { Component } from "react";
import "./App.css";
import Note from "./Note/Note";
import NoteForm from "./NoteForm/NoteForm";
import Firebase from "./config/Config";

class App extends Component {
  constructor(props) {
    super(props);

    // this.db = this.app
    //   .database()
    //   .ref()
    //   .child("notes");

    this.db = Firebase.database()
      .ref()
      .child("manual")
      .child("thread");

    this.addNote = this.addNote.bind(this);

    this.state = {
      notes: []
    };
  }

  componentWillMount() {
    const previousNotes = this.state.notes;

    this.db.on("child_added", snap => {
      previousNotes.push({
        noteId: snap.key,
        noteContent: snap.val().note
      });

      this.setState({
        notes: previousNotes
      });
    });
  }

  addNote(note) {
    this.db.push().set({ noteContent: note });
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">React & Firebase To-Do List</div>
        </div>

        <div className="notesBody">
          {this.state.notes.map(note => (
            <Note
              noteContent={note.noteContent}
              noteId={note.noteId}
              key={note.noteId}
            />
          ))}
        </div>

        <div className="notesFooter">
          <NoteForm addNote={this.addNote} />
        </div>
      </div>
    );
  }
}

export default App;
