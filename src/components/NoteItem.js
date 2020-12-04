// import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import NoteItemStyled from "../styles";

const NoteItem = ({ note }) => {
  return (
    <NoteItemStyled key={note.name}>
      {/* <Link to={`/notes/${note.slug}`}></Link> */}
      <p>{note.description}</p>
    </NoteItemStyled>
  );
};

export default observer(NoteItem);
