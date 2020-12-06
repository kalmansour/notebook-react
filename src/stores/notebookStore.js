import { action, makeObservable, observable } from "mobx";
import axios from "axios";

class NotebookStore {
  notebooks = [];

  constructor() {
    makeObservable(this, {
      notebooks: observable,
      fetchNotebooks: action,
      createNotebook: action,
    });
  }

  fetchNotebooks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notebooks");
      this.notebooks = response.data;
    } catch (error) {
      console.error("NotebookStore -> fetchNotebooks -> error", error);
    }
  };

  createNotebook = async (newNotebook) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/notebooks",
        newNotebook
      );
      this.notebooks.push(response.data);
    } catch (error) {
      console.error("NotebookStore -> createNotebooks -> error", error);
    }
  };
}

const notebookStore = new NotebookStore();
notebookStore.fetchNotebooks();

export default notebookStore;