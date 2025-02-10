import classes from "./TypeList.module.scss";
import React, { FC, useState } from "react";
import TypeListSkeleton from "./TypeList.skeleton";
import TypeListProps from "./TypeList.props";
import { Type } from "@/shared/entities";
import { TypeRemove, TypeUpdate } from "@/features/type";

const TypeList: FC<TypeListProps> = ({ types = [], isLoading = false, isError = false }) => {
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

  if (isLoading) return <TypeListSkeleton />;
  if (isError) return <h2>Ошибка</h2>;
  if ((types ?? []).length === 0) return <h2>Список пуст</h2>;

  return (
    <React.Fragment>
      <TypeUpdate type={update} isOpen={isOpenUpdate} onClose={onCloseUpdate} />
      <TypeRemove type={remove} isOpen={isOpenRemove} onClose={onCloseRemove} />
      <div className={classes.root}>
        {(types ?? []).map((type) => (
          <div key={type.id} style={{ margin: "10px", border: "1px solid red" }}>
            <div>{type.id}</div>
            <div>{type.name}</div>
            <button onClick={handlerUpdate(type)}>Изменить</button>
            <button onClick={handlerRemove(type)}>Удалить</button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default TypeList;
