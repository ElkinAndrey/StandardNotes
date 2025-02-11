import { useState } from "react";
import classes from "./NoteList.module.scss";
import NoteListProps from "./NoteList.props";
import { Init, Note } from "@/shared/entities";
import { NoteCard } from "@/entities/note";
import { Button } from "@mui/material";
import React from "react";
import { NoteRemove, NoteUpdate } from "@/features/note";

function NoteList({ notes = [] }: NoteListProps) {
  const [update, setUpdate] = useState<Note>(Init.note);
  const [remove, setRemove] = useState<Note>(Init.note);
  const [isOpenUpdate, setIsOpenUpdate] = useState<boolean>(false);
  const [isOpenRemove, setIsOpenRemove] = useState<boolean>(false);

  const handlerUpdate = (value: Note) => () => {
    setUpdate(value);
    setIsOpenUpdate(true);
  };

  const handlerRemove = (value: Note) => () => {
    setRemove(value);
    setIsOpenRemove(true);
  };

  const onCloseUpdate = () => setIsOpenUpdate(false);
  const onCloseRemove = () => setIsOpenRemove(false);

  if ((notes ?? []).length === 0) return <span className={classes.empty}>Список пуст</span>;

  return (
    <React.Fragment>
      <div className={classes.root}>
        {notes.map((note) => (
          <NoteCard key={note.id} note={note}>
            <Button onClick={handlerUpdate(note)} variant="contained" color="primary">
              Изменить
            </Button>
            <Button onClick={handlerRemove(note)} variant="contained" color="error">
              Удалить
            </Button>
          </NoteCard>
        ))}
      </div>
      <NoteUpdate note={update} isOpen={isOpenUpdate} onClose={onCloseUpdate} />
      <NoteRemove note={remove} isOpen={isOpenRemove} onClose={onCloseRemove} />
    </React.Fragment>
  );
}

export default NoteList;
