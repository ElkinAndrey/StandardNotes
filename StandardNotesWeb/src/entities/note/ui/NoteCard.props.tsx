import { Note } from "@/shared/entities";
import { ReactNode } from "react";

interface NoteCardProps {
  note?: Note;
  children?: ReactNode;
}

export default NoteCardProps;
