// import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import NoteItemStyled from "../styles";

//Buttons
import DeleteNoteButton from "./buttons/DeleteNoteButton";
import UpdateNoteButton from "./buttons/UpdateNoteButton";

const NoteItem = ({ note }) => {
  return (
    <NoteItemStyled key={note.name}>
      {/* <Link to={`/notes/${note.slug}`}>
      </Link>  */}
      <p>{note.title}</p>
      <p>{note.content}</p>
      <UpdateNoteButton note={note} />
      <DeleteNoteButton noteId={note.noteId} />
    </NoteItemStyled>
  );
};

export default observer(NoteItem);
