// import { useState } from "react";
import { observer } from 'mobx-react'

//Stores
import noteStore from '../stores/noteStore'

//Styling
import ListWrapper from '../styles'

//Components
import NoteItem from './NoteItem'
import AddNotebutton from './buttons/AddNotebutton' //Need to create a NoteModal for NoteList
import notebookStore from '../stores/notebookStore'

const NoteList = ({ notes }) => {
  const noteList = notes.map((note) => <NoteItem note={note} key={note.id} />)

  return (
    <>
      <AddNotebutton />
      <ListWrapper>
        {notes.length > 0 ? noteList : 'No notes found'}
      </ListWrapper>
    </>
  )
}

export default observer(NoteList)
