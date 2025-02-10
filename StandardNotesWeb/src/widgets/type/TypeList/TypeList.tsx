import classes from "./TypeList.module.scss";
import React, { FC, useState } from "react";
import TypeListSkeleton from "./TypeList.skeleton";
import TypeListProps from "./TypeList.props";
import TypeUpdate from "@/features/type/TypeUpdate/TypeUpdate";
import { Type } from "@/shared/entities";

const TypeList: FC<TypeListProps> = ({ types = [], isLoading = false, isError = false }) => {
  const [update, setUpdate] = useState<Type | null>(null);
  const [isOpenUpdate, setIsOpenUpdate] = useState<boolean>(false);

  const handlerUpdate = (value: Type) => () => {
    setUpdate(value);
    setIsOpenUpdate(true);
  };

  const onCloseUpdate = () => {
    setIsOpenUpdate(false);
  };

  if (isLoading) return <TypeListSkeleton />;
  if (isError) return <h2>Ошибка</h2>;
  if ((types ?? []).length === 0) return <h2>Список пуст</h2>;

  return (
    <React.Fragment>
      <TypeUpdate type={update} isOpen={isOpenUpdate} onClose={onCloseUpdate} />
      <div className={classes.root}>
        {(types ?? []).map((type) => (
          <div key={type.id} style={{ margin: "10px", border: "1px solid red" }}>
            <div>{type.id}</div>
            <div>{type.name}</div>
            <button onClick={handlerUpdate(type)}>Изменить</button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default TypeList;
