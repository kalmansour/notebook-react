import { useState } from "react";
import Modal from "react-modal";
import { CreateButtonStyled } from "../../styles";
import noteStore from "../../stores/noteStore";

const NoteModal = ({ notebook, isOpen, closeModal }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    noteStore.createNote(note, notebook);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Note Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Title</label>
            <input
              value={note.title}
              name="name"
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Content</label>
          <input
            value={note.content}
            name="cover"
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>
        <CreateButtonStyled type="submit" className="btn float-right">
          Create
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default NoteModal;
