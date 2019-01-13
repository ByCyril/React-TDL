import React, { Component } from "react";
// import "./FirebaseModule";
import "./App.css";
import Note from "./Note/Note";
import NoteForm from "./NoteForm/NoteForm";
class App extends Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);

    this.state = {
      notes: [
        {
          noteContent: "First note",
          noteId: 1
        },
        {
          noteContent: "second note",
          noteId: 2
        },
        {
          noteContent: "third note",
          noteId: 3
        },
        {
          noteContent: "fourth note",
          noteId: 4
        }
      ]
    };
  }

  addNote(note) {
    const previousNotes = this.state.notes;
    previousNotes.push(note);
    this.setState({
      notes: previousNotes
    });
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
