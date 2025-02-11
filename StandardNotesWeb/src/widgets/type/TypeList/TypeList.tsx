import classes from "./TypeList.module.scss";
import React, { JSX, useState } from "react";
import TypeListProps from "./TypeList.props";
import { Type } from "@/shared/entities";
import { TypeRemove, TypeUpdate } from "@/features/type";
import { TypeCard } from "@/entities/type";
import { Button } from "@mui/material";

function TypeList({ types = [], isError = false }: TypeListProps): JSX.Element {
  const [update, setUpdate] = useState<Type | null>(null);
  const [remove, setRemove] = useState<Type | null>(null);
  const [isOpenUpdate, setIsOpenUpdate] = useState<boolean>(false);
  const [isOpenRemove, setIsOpenRemove] = useState<boolean>(false);

  const handlerUpdate = (value: Type) => () => {
    setUpdate(value);
    setIsOpenUpdate(true);
  };

  const handlerRemove = (value: Type) => () => {
    setRemove(value);
    setIsOpenRemove(true);
  };

  const onCloseUpdate = () => setIsOpenUpdate(false);
  const onCloseRemove = () => setIsOpenRemove(false);

  if (isError) return <span className={classes.error}>Неизвестная ошибка</span>;
  if ((types ?? []).length === 0) return <span className={classes.empty}>Список пуст</span>;

  return (
    <React.Fragment>
      <ul className={classes.root}>
        {(types ?? []).map((type) => (
          <TypeCard key={type.id} type={type}>
            <Button onClick={handlerUpdate(type)} variant="contained" color="primary">
              Изменить
            </Button>
            <Button onClick={handlerRemove(type)} variant="contained" color="error">
              Удалить
            </Button>
          </TypeCard>
        ))}
      </ul>
      <TypeUpdate type={update} isOpen={isOpenUpdate} onClose={onCloseUpdate} />
      <TypeRemove type={remove} isOpen={isOpenRemove} onClose={onCloseRemove} />
    </React.Fragment>
  );
}

export default TypeList;
