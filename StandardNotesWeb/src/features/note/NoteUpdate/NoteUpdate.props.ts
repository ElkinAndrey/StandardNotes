import { Note } from "@/shared/entities";

interface NoteUpdateProps {
  note?: Note;
  isOpen?: boolean;
  onClose?: () => void;
}

export default NoteUpdateProps;
