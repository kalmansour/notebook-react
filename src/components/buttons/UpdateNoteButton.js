import { useState } from "react";
import { UpdateButtonStyled } from "../../styles";
import NoteModal from "../modals/NoteModal";

const UpdateNoteButton = ({ note }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <NoteModal oldNote={note} isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default UpdateNoteButton;
