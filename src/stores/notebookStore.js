import { action, makeObservable, observable } from 'mobx'
import axios from 'axios'

class NotebookStore {
  notebooks = []
  notes = []

  constructor() {
    makeObservable(this, {
      notebooks: observable,
      notes: observable,
      fetchNotebooks: action,
      createNotebook: action,
    })
  }
  //fetching
  fetchNotebooks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/notebooks')
      this.notebooks = response.data
    } catch (error) {
      console.error('NotebookStore -> fetchNotebooks -> error', error)
    }
  }
  //fetching notes
  fetchingNotes = async (notebookId) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/notebooks/${notebookId.id}`
      )
      this.notes = response.data
    } catch (error) {
      console.error('NotebookStore -> fetchNotebooks -> error', error)
    }
  }

  //create
  createNotebook = async (newNotebook) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/notebooks',
        newNotebook
      )
      this.notebooks.push(response.data)
      notebookStore.fetchNotebooks()
    } catch (error) {
      console.error('NotebookStore -> createNotebooks -> error', error)
    }
  }

  //update
  updateNotebook = async (updatedNotebook) => {
    try {
      await axios.put(
        `https://localhost:8000/notebooks/${updatedNotebook.id}`,
        updatedNotebook
      )
      const notebook = this.notebooks.find(
        (notebook) => notebook.id === updatedNotebook.id
      )
      for (const key in notebook) notebook[key] = updatedNotebook[key]
    } catch (error) {
      console.error('NotebookStore -> updateNotebook -> error', error)
    }
  }

  //delete
  deleteNotebook = async (notebookId) => {
    try {
      await axios.delete(`http://localhost:8000/notebooks/${notebookId}`)
      this.notebooks = this.notebooks.filter(
        (notebook) => notebook.id !== +notebookId
      )
      // notebookStore.fetchNotebooks()
    } catch (error) {
      console.error('NotebookStore -> deleteNotebook -> error', error)
    }
  }
}

const notebookStore = new NotebookStore()
notebookStore.fetchNotebooks()

export default notebookStore
