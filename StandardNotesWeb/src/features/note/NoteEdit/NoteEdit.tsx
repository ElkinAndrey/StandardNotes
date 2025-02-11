import { JSX, useEffect, useState } from "react";
import NoteEditProps from "./NoteEdit.props";
import classes from "./NoteEdit.module.scss";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Init, Note, Type } from "@/shared/entities";
import { TypeHooks, TypeSelect } from "@/entities/type";

function NoteEdit({
  isOpen = false,
  isLoading = false,
  onClose = () => {},
  note = Init.note,
  fetch = async (_: Note) => {},
  error = (_: unknown) => {},
  title = "",
  button = "",
}: NoteEditProps): JSX.Element {
  const [newNote, setNewNote] = useState<Note>(Init.note);
  const { data: types, error: errorTypes, refetch: refetchTypes } = TypeHooks.useGet();

  const setTitle = (value: string) => setNewNote({ ...newNote, title: value });
  const setText = (value: string) => setNewNote({ ...newNote, text: value });
  const setType = (value: Type) => setNewNote({ ...newNote, type: value });

  const handler = async () => {
    try {
      await fetch(newNote);
      onClose();
    } catch (e) {
      error(e);
    }
  };

  useEffect(() => {
    refetchTypes();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const newType = note ?? Init.note;
    setNewNote({ ...newType });
  }, [isOpen]);

  useEffect(() => {
    if (!errorTypes) return;
    console.log("НЕ УДАЛОСЬ ПОЛУЧИТЬ ТИПЫ", errorTypes);
  }, [errorTypes]);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <div className={classes.inputs}>
          <TextField
            value={newNote.title}
            onChange={(e) => setTitle(e.target.value)}
            label="Заголовок"
            variant="filled"
          />
          <TextField
            value={newNote.text}
            onChange={(e) => setText(e.target.value)}
            label="Текст"
            variant="filled"
            multiline
            maxRows={4}
            minRows={4}
          />
          <TypeSelect types={types} value={newNote?.type ?? Init.type} setValue={setType} />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button onClick={handler} loading={isLoading}>
          {button}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default NoteEdit;
