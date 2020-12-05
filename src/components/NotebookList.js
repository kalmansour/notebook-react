// import { useState } from "react";
import { observer } from "mobx-react";

//Stores
import notebookStore from "../stores/notebookStore";

//Styling
import ListWrapper from "../styles";

//Components
import NotebookItem from "./NotebookItem";
import AddNotebookButton from "./buttons/AddNotebookButton";

const NotebookList = () => {
  const notebookList = notebookStore.notebooks.map((notebook) => (
    <NotebookItem notebook={notebook} key={notebook.id} />
  ));
  return (
    <>
      <AddNotebookButton />
      <ListWrapper> {notebookList}</ListWrapper>
    </>
  );
};

export default observer(NotebookList);
