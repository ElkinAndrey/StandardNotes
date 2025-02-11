import { NoteListSkeleton } from "@/widgets/note";
import classes from "./NotesPage.module.scss";
import { Skeleton } from "@mui/material";

const NotesPageSkeleton = () => {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Skeleton variant="text" animation="wave" width={70} className={classes.title} />
        <Skeleton variant="rounded" animation="wave" width={100} height={30} />
      </div>
      <NoteListSkeleton />
    </div>
  );
};

export default NotesPageSkeleton;
