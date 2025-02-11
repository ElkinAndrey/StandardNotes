import React, { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import classes from "./TypesPage.module.scss";
import TypesPageSkeleton from "./TypesPage.skeleton";
import { TypeList } from "@/widgets/type";
import { TypeHooks } from "@/entities/type";
import { TypeCreate } from "@/features/type";

const TypesPage = () => {
  const [isOpenCreate, setIsOpenCreate] = useState<boolean>(false);
  const onCloseCreate = () => setIsOpenCreate(false);

  const { data, isLoading, isError, refetch, isFetching } = TypeHooks.useGet({
    start: 0,
    length: 10,
  });

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) return <TypesPageSkeleton />;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.header}>
          <h1 className={classes.title}>Типы</h1>
          <Button variant="contained" onClick={() => setIsOpenCreate(true)} color="success">
            Добавить
          </Button>
          {!isLoading && isFetching && <CircularProgress size="25px" />}
        </div>
        <TypeList types={data ?? []} isError={isError} />
      </div>
      <TypeCreate isOpen={isOpenCreate} onClose={onCloseCreate} />
    </React.Fragment>
  );
};

export default TypesPage;
