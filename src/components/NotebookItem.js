// import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import NotebookItemStyled from "../styles";

const NotebookItem = ({ notebook }) => {
  return (
    <NotebookItemStyled key={notebook.name}>{notebook.name}</NotebookItemStyled>
  );
};

export default observer(NotebookItem);
