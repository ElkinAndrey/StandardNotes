import { Note } from "@/shared/entities";

interface NoteEditProps {
  isOpen?: boolean;
  title?: string;
  button?: string;
  isLoading?: boolean;
  note?: Note | null;
  onClose?: () => void;
  fetch?: (value: Note) => Promise<unknown>;
  error?: (error: unknown) => void;
}

export default NoteEditProps;
