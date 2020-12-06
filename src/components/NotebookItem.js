import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import NotebookItemStyled from "../styles";

const NotebookItem = ({ notebook }) => {
  return (
    <NotebookItemStyled>
      <Link to={`/notebooks/${notebook.slug}`} style={{ color: "red" }}>
        <h4>{notebook.name}</h4>
      </Link>
    </NotebookItemStyled>
  );
};

export default observer(NotebookItem);
