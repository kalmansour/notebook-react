import { observer } from 'mobx-react'
import { Redirect } from 'react-router'
import NoteItemStyled from '../styles'

//Buttons
import DeleteNoteButton from './buttons/DeleteNoteButton'
import UpdateNoteButton from './buttons/UpdateNoteButton'

const NoteItem = ({ note }) => {
  if (!note) return <Redirect to='/notebooks' />
  return (
    <NoteItemStyled key={note.name}>
      <h4>{note.title}</h4>
      <p style={{ color: 'black' }}>{note.content}</p>
      <UpdateNoteButton note={note} />
      <DeleteNoteButton noteId={note.id} />
    </NoteItemStyled>
  )
}

export default observer(NoteItem)
