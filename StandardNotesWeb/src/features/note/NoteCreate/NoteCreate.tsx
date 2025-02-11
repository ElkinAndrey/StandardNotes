import { NoteHooks } from "@/entities/note";
import { JSX } from "react";
import NoteEdit from "../NoteEdit";
import NoteCreateProps from "./NoteCreate.props";
import { Init, Note } from "@/shared/entities";

function NoteCreate({ isOpen = false, onClose = () => {} }: NoteCreateProps): JSX.Element {
  const [createNote, { isLoading }] = NoteHooks.useCreate();

  return (
    <NoteEdit
      isOpen={isOpen}
      isLoading={isLoading}
      onClose={onClose}
      note={Init.note}
      fetch={async (value: Note) => await createNote(value).unwrap()}
      error={(error) => console.log("ОШИБКА ПРИ ДОБАВЛЕНИИ ЗАМЕТКИ", error)}
      title="Добавить заметку"
      button="Добавить"
    />
  );
}

export default NoteCreate;
