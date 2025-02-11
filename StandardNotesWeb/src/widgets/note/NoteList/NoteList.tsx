import { useState } from "react";
import classes from "./NoteList.module.scss";
import NoteListProps from "./NoteList.props";
import { Note } from "@/shared/entities";
import { NoteCard } from "@/entities/note";
import { Button } from "@mui/material";

function NoteList({ notes = [], isError = false }: NoteListProps) {
  const [update, setUpdate] = useState<Note | null>(null);
  const [remove, setRemove] = useState<Note | null>(null);
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

  if (isError) return <span className={classes.error}>Неизвестная ошибка</span>;
  if ((notes ?? []).length === 0) return <span className={classes.empty}>Список пуст</span>;

  return (
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
  );
}

export default NoteList;
