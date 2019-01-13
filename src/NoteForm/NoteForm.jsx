import React, { Component } from "react";
import "./NoteForm.css";
import { throws } from "assert";
class NoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: {
        newNoteContent: "",
        newNoteId: 0
      }
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.writeNote = this.writeNote.bind(this);
  }

  handleUserInput(event) {
    this.setState({
      newNoteContent: event.target.value,
      newNoteId: event.target.value.length + 1
    });
  }

  writeNote() {
    this.props.addNote(this.state.note);

    this.setState({
      newNoteContent: "",
      newNoteId: 0
    });
  }

  render() {
    return (
      <div className="formWrapper">
        <input
          className="noteInput"
          placeholder="Memo"
          value={this.state.newNoteContent}
          onChange={this.handleUserInput}
        />

        <button className="noteButton" onClick={this.writeNote}>
          Add
        </button>
      </div>
    );
  }
}

export default NoteForm;
