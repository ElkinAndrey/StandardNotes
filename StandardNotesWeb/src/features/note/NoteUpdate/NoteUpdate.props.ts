import { Note } from "@/shared/entities";

interface NoteUpdateProps {
  note?: Note | null;
  isOpen?: boolean;
  onClose?: () => void;
}

export default NoteUpdateProps;
