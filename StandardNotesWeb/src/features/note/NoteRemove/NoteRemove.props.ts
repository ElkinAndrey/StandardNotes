import { Note } from "@/shared/entities";

interface NoteRemoveProps {
  note?: Note;
  isOpen?: boolean;
  onClose?: () => void;
}

export default NoteRemoveProps;
