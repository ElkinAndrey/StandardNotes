import { JSX } from "react";
import classes from "./NoteList.module.scss";
import { TypeCardSkeleton } from "@/entities/type";

function NoteListSkeleton(): JSX.Element {
  return (
    <div className={classes.root}>
      <TypeCardSkeleton />
      <TypeCardSkeleton />
      <TypeCardSkeleton />
    </div>
  );
}

export default NoteListSkeleton;
