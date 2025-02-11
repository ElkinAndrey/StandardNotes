import { JSX } from "react";
import classes from "./NoteCard.module.scss";
import { Skeleton } from "@mui/material";

function NoteCardSkeleton(): JSX.Element {
  return (
    <li className={classes.root}>
      <div className={classes.header}>
        <div className={classes.info}>
          <Skeleton variant="text" animation="wave" width={80} className={classes.title} />
          <Skeleton variant="text" animation="wave" width={50} className={classes.type} />
        </div>
        <div className={classes.children}>
          <Skeleton animation="wave" height={40} width={100} />
          <Skeleton animation="wave" height={40} width={100} />
        </div>
      </div>
      <div className={classes.delimiter}></div>
      <Skeleton variant="text" animation="wave" width={"100%"} />
      <Skeleton variant="text" animation="wave" width={"100%"} />
      <Skeleton variant="text" animation="wave" width={120} />
    </li>
  );
}

export default NoteCardSkeleton;
