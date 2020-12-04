import { action, makeObservable, observable } from "mobx";
import axios from "axios";

class NoteStore {
  notes = [];

  constructor() {
    makeObservable(this, {
      notes: observable,
      fetchNotes: action,
    });
  }

  fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notes");
      this.notes = response.data;
    } catch (error) {
      console.error("NoteStore -> fetchNotes -> error", error);
    }
  };
}

const noteStore = new NoteStore();
noteStore.fetchNotes();

export default noteStore;
