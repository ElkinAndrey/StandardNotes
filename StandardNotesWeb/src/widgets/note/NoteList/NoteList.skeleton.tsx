import { JSX } from "react";
import classes from "./NoteList.module.scss";
import { NoteCardSkeleton } from "@/entities/note";

function NoteListSkeleton(): JSX.Element {
  return (
    <div className={classes.root}>
      <NoteCardSkeleton />
      <NoteCardSkeleton />
      <NoteCardSkeleton />
    </div>
  );
}

export default NoteListSkeleton;
