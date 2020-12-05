import { useState } from "react";
import Modal from "react-modal";
import { CreateButtonStyled } from "../../styles";
import notebookStore from "../../stores/notebookStore";

const NotebookModal = ({ isOpen, closeModal }) => {
  const [notebook, setNotebook] = useState({
    name: "",
    cover: "",
  });

  const handleChange = (event) => {
    setNotebook({ ...notebook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    notebookStore.createNotebook(notebook);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Notebook Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              value={notebook.name}
              name="name"
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Cover</label>
          <input
            value={notebook.cover}
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

export default NotebookModal;
