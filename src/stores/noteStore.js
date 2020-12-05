import { action, makeObservable, observable } from "mobx";
// import slugify from "react-slugify";
import axios from "axios";
import notebookStore from "./notebookStore";

class NoteStore {
  notes = [];

  constructor() {
    makeObservable(this, {
      notes: observable,
      fetchNotes: action,
      createNote: action,
    });
  }

  getNoteById = (noteId) => this.notes.find((note) => note.id === noteId);

  fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notes");
      this.notes = response.data;
    } catch (error) {
      console.error("NoteStore -> fetchNotes -> error", error);
    }
  };

  createNote = async (newNote, notebook) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/notebooks/${notebook.id}/notes`,
        newNote
      );
      this.notes.push(response.data);
      notebookStore.notes.push({ id: response.date.id });
    } catch (error) {
      console.error("NotebookStore -> createNotebooks -> error", error);
    }
  };
}

const noteStore = new NoteStore();
noteStore.fetchNotes();

export default noteStore;
