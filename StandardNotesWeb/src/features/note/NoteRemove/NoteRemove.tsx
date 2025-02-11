import { NoteHooks } from "@/entities/note";
import { JSX } from "react";
import NoteRemoveProps from "./NoteRemove.props";
import { RemoveDialog } from "@/shared/ui";
import { Init } from "@/shared/entities";

function NoteRemove({
  isOpen = false,
  onClose = () => {},
  note = Init.note,
}: NoteRemoveProps): JSX.Element {
  const [removeNote, { isLoading }] = NoteHooks.useRemove();

  return (
    <RemoveDialog
      text={`Вы уверены, что хотите удалить заметку "${note?.title ?? ""}"`}
      isOpen={isOpen}
      isLoading={isLoading}
      onClose={onClose}
      remove={async () => await removeNote(note?.id ?? "").unwrap()}
      error={(error) => console.log("ОШИБКА ПРИ УДАЛЕНИИ ЗАМЕТКИ", error)}
    />
  );
}

export default NoteRemove;
