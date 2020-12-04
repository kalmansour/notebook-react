// import { useState } from "react";
import { observer } from "mobx-react";

//Stores
import noteStore from "../stores/noteStore";

//Styling
import ListWrapper from "../styles";

//Components
import NoteItem from "./NoteItem";

const NoteList = () => {
  const noteList = noteStore.notes.map((note) => (
    <NoteItem note={note} key={note.id} />
  ));
  return <ListWrapper>{noteList}</ListWrapper>;
};

export default observer(NoteList);
