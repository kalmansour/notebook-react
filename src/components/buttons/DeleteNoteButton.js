import noteStore from "../../stores/noteStore";
import { DeleteButtonStyled } from "../../styles";

const DeleteNoteButton = ({ noteId }) => {
  const handleDelete = () => {
    noteStore.deleteNote(noteId);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteNoteButton;
