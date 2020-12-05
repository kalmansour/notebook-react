import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";

import NotebookModal from "../modals/NotebookModal";

const AddNotebookButton = ({ notebook }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <NotebookModal
        notebook={notebook}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default AddNotebookButton;
