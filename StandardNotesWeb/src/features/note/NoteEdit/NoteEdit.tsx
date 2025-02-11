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
import { Check } from "@/shared/utils";

const initErrors = {
  title: "",
  text: "",
};

const errorMessages = {
  title: { empty: "Укажите название заметки" },
  text: { empty: "Укажите текст заметки" },
};

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
  const [errors, setErrors] = useState({ ...initErrors });
  const { data: types, error: errorTypes, refetch: refetchTypes } = TypeHooks.useGet();

  const setTitle = (value: string) => setNewNote({ ...newNote, title: value });
  const setText = (value: string) => setNewNote({ ...newNote, text: value });
  const setType = (value: Type) => setNewNote({ ...newNote, type: value });

  const getTitleError = () => new Check(newNote.title, errorMessages.title).isEmpty().resultFirst();
  const getTextError = () => new Check(newNote.text, errorMessages.text).isEmpty().resultFirst();

  const checkTitle = () => {
    const error = getTitleError();
    setErrors({ ...errors, title: error });
    return !error;
  };

  const checkText = () => {
    const error = getTextError();
    setErrors({ ...errors, text: error });
    return !error;
  };

  const handler = async () => {
    const titleError = getTitleError();
    const textError = getTextError();
    setErrors({ ...errors, title: titleError, text: textError });
    if (titleError || textError) return;
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
    setErrors({ ...initErrors });
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
            value={newNote.title}
            onChange={(e) => setTitle(e.target.value)}
            label="Заголовок"
            variant="filled"
            onBlur={checkTitle}
            error={errors.title !== ""}
            helperText={errors.title}
          />
          <TextField
            value={newNote.text}
            onChange={(e) => setText(e.target.value)}
            label="Текст"
            variant="filled"
            multiline
            maxRows={4}
            minRows={4}
            onBlur={checkText}
            error={errors.text !== ""}
            helperText={errors.text}
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
