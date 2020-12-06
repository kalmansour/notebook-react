import { Route, Switch } from "react-router-dom";
import { observer } from "mobx-react";
//Components
import NotebookList from "../components/NotebookList";
import NoteList from "../components/NoteList";
import Home from "../components/Home";
import NotebookDetail from "./NotebookDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/notebooks/:notebookId">
        <NotebookDetail />
      </Route>
      <Route path="/notebooks">
        <NotebookList />
      </Route>
      <Route path="/notes">
        <NoteList />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
