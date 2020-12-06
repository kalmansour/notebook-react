import { action, makeObservable, observable } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class NoteStore {
  notes = [];

  constructor() {
    makeObservable(this, {
      notes: observable,
      fetchNotes: action,
      createNote: action,
      updateNote: action,
      deleteNote: action,
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
      const formData = new FormData();
      for (const key in newNote) formData.append(key, newNote[key]);
      const response = await axios.post(
        `http://localhost:8000/notebooks/${notebook.id}/notes`,
        formData
      );
      this.notes.push(response.data);
      notebook.notes.push({ id: response.date.id });
    } catch (error) {
      console.error("NotebookStore -> createNotebooks -> error", error);
    }
  };

  updateNote = async (updatedNote) => {
    try {
      const formData = new FormData();
      for (const key in updatedNote) formData.append(key, updatedNote[key]);
      await axios.put(
        `http://localhost:8000/notes/${updatedNote.id}`,
        formData
      );
      const note = this.notes.find((note) => note.id === updatedNote.id);
      for (const key in note) note[key] = updatedNote[key];
      note.slug = slugify(note.name);
    } catch (error) {
      console.log("NoteeStore -> updateNote -> error", error);
    }
  };

  deleteNote = async (noteId) => {
    try {
      await axios.delete(`http://localhost:8000/notes/${noteId}`);
      this.notes = this.notes.filter((note) => note.id !== +noteId);
    } catch (error) {
      console.error("NoteStore -> deleteNote -> error", error);
    }
  };
}

const noteStore = new NoteStore();
noteStore.fetchNotes();

export default noteStore;
