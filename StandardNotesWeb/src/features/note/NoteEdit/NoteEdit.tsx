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
import { Check, useCheck } from "@/shared/utils";

const titleEmpty = "Укажите название заметки";
const textEmpty = "Укажите текст заметки";

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
  const { data: types, error: errorTypes, refetch: refetchTypes } = TypeHooks.useGet();
  const [newNote, setNewNote] = useState<Note>(Init.note);
  const [errorTitle, checkTitle, resetTitle] = useCheck(newNote.title, { empty: titleEmpty });
  const [errorText, checkText, resetText] = useCheck(newNote.text, { empty: textEmpty });

  const setTitle = (value: string) => setNewNote({ ...newNote, title: value });
  const setText = (value: string) => setNewNote({ ...newNote, text: value });
  const setType = (value: Type) => setNewNote({ ...newNote, type: value });

  const handler = async () => {
    if (checkTitle() && checkText()) return;
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
    setNewNote({ ...(note ?? Init.note) });
    resetTitle();
    resetText();
  }, [isOpen]);

  useEffect(() => {
    if (!errorTypes) return;
    console.log("НЕ УДАЛОСЬ ПОЛУЧИТЬ ТИПЫ ДЛЯ ВЫПАДАЮЩЕГО СПИСКА", errorTypes);
  }, [errorTypes]);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <div className={classes.inputs}>
          <TextField
            variant="filled"
            label="Заголовок"
            helperText={errorTitle}
            value={newNote.title}
            error={errorTitle !== ""}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={checkTitle}
          />
          <TextField
            multiline
            minRows={4}
            maxRows={4}
            variant="filled"
            label="Текст"
            helperText={errorText}
            value={newNote.text}
            error={errorText !== ""}
            onChange={(e) => setText(e.target.value)}
            onBlur={checkText}
          />
          <TypeSelect types={types} value={newNote.type ?? Init.type} setValue={setType} />
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
