import { BrowserRouter, Route, Switch } from "react-router-dom";
import { observer } from "mobx-react";
//Components
import NotebookList from "../components/NotebookList";
import NoteList from "../components/NoteList";
import Home from "../components/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
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
    </BrowserRouter>
  );
};

export default observer(Routes);
