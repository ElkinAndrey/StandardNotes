import { JSX } from "react";
import classes from "./NoteCard.module.scss";
import NoteCardProps from "./NoteCard.props";
import { Init } from "@/shared/entities";

function NoteCard({ note = Init.note, children = null }: NoteCardProps): JSX.Element {
  return (
    <li className={classes.root}>
      <div className={classes.header}>
        <div className={classes.info}>
          <span className={classes.title}>{note.title}</span>
          {note.type !== null ? (
            <span className={classes.type}>{note.type?.name ?? "Нет типа"}</span>
          ) : (
            <span className={classes.typeEmpty}>Нет типа</span>
          )}
        </div>
        <div className={classes.children}>{children}</div>
      </div>
      <div className={classes.delimiter}></div>
      <span className={classes.text}>{note.text}</span>
    </li>
  );
}

export default NoteCard;
