import { JSX } from "react";
import NoteUpdateProps from "./NoteUpdate.props";
import { Init, Note } from "@/shared/entities";
import NoteEdit from "../NoteEdit";
import { NoteHooks } from "@/entities/note";

function NoteUpdate({
  note = Init.note,
  isOpen = false,
  onClose = () => {},
}: NoteUpdateProps): JSX.Element {
  const [updateNote, { isLoading }] = NoteHooks.useUpdate();

  return (
    <NoteEdit
      isOpen={isOpen}
      isLoading={isLoading}
      onClose={onClose}
      note={note}
      fetch={async (value: Note) => await updateNote(value).unwrap()}
      error={(e) => console.log("ОШИБКА ПРИ ИЗМЕНЕНИИ ЗАМЕТКИ", e)}
      title="Изменить заметку"
      button="Изменить"
    />
  );
}

export default NoteUpdate;
