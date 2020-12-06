import { Redirect, useParams } from "react-router";
import { observer } from "mobx-react";

//Stores
import noteStore from "../stores/noteStore";
import notebookStore from "../stores/notebookStore";

//Components
import NoteList from "./NoteList";
import AddNotebookButton from "./buttons/AddNotebookButton";

//Styles
import { DetailWrapper } from "../styles";

import React from "react";

const NotebookDetail = () => {
  const { notebookId } = useParams();

  const notebook = notebookStore.notebooks.find(
    (notebook) => notebook.id === +notebookId
  );

  if (!notebook) return <Redirect to="/notebooks" />;

  const notes = notebook.notes.map((note) => noteStore.getNoteById(note.id));

  return (
    <div className="row">
      <div className="container">
        <DetailWrapper className="col-12">
          <p>{notebook.name}</p>
          <p>{notebook.cover}</p>
        </DetailWrapper>
      </div>
      <div className="col-12">
        <NoteList notes={notes} />
        <AddNotebookButton notebook={notebook} />
      </div>
    </div>
  );
};

export default observer(NotebookDetail);
