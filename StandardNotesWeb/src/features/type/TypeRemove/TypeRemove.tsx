import { FC, useEffect, useState } from "react";
import classes from "./TypeRemove.module.scss";
import TypeRemoveProps from "./TypeRemove.props";
import { TypeHooks } from "@/entities/type";
import { Type } from "@/shared/entities";

const TypeRemove: FC<TypeRemoveProps> = ({ isOpen = false, onClose = () => {}, type = null }) => {
  const [newType, setNewType] = useState<Type>({ id: "", name: "" });
  const [removeType, { isLoading, isError }] = TypeHooks.useRemove();

  const handlerRemove = async () => {
    try {
      await removeType(newType.id).unwrap();
      onClose();
    } catch {
      console.log("Ошибка");
    }
  };

  useEffect(() => {
    const newType = type ?? { id: "", name: "" };
    setNewType({ ...newType });
  }, [type]);

  if (!isOpen) return null;

  return (
    <div className={classes.root}>
      <h2>Удаление</h2>
      <div>{`Тип с id ${newType.id} и именем ${newType.name}`}</div>
      <div>{`isLoading : ${isLoading}`}</div>
      <div>{`isError : ${isError}`}</div>
      <div>
        <button onClick={onClose}>Отмена</button>
        <button onClick={handlerRemove}>Удалить</button>
      </div>
    </div>
  );
};

export default TypeRemove;
