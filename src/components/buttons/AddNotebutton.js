import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";

import NoteModal from "../modals/NoteModal";

const AddNoteButton = ({ note }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <NoteModal note={note} isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddNoteButton;
