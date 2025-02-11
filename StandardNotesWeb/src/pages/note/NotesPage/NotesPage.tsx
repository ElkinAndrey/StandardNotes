import { Button, CircularProgress } from "@mui/material";
import classes from "./NotesPage.module.scss";
import { useEffect, useState } from "react";
import NotesPageSkeleton from "./NotesPage.skeleton";
import { NoteHooks } from "@/entities/note";
import { NoteList } from "@/widgets/note";

const NotesPage = () => {
  const [isOpenCreate, setIsOpenCreate] = useState<boolean>(false);
  const onCloseCreate = () => setIsOpenCreate(false);

  const { data, isLoading, isError, refetch, isFetching } = NoteHooks.useGet();

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) return <NotesPageSkeleton />;

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h1 className={classes.title}>Заметки</h1>
        <Button variant="contained" onClick={() => setIsOpenCreate(true)} color="success">
          Добавить
        </Button>
        {!isLoading && isFetching && <CircularProgress size="25px" />}
      </div>
      <NoteList notes={data ?? []} isError={isError} />
    </div>
  );
};

export default NotesPage;
