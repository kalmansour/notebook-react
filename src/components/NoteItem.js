import { observer } from "mobx-react";
import NoteItemStyled from "../styles";

//Buttons
import DeleteNoteButton from "./buttons/DeleteNoteButton";
import UpdateNoteButton from "./buttons/UpdateNoteButton";

const NoteItem = ({ note }) => {
  return (
    <NoteItemStyled key={note.name}>
      <h4>{note.title}</h4>
      <p style={{ color: "black" }}>{note.content}</p>
      <UpdateNoteButton note={note} />
      <DeleteNoteButton noteId={note.noteId} />
    </NoteItemStyled>
  );
};

export default observer(NoteItem);
