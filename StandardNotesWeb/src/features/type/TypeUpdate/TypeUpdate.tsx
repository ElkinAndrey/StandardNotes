import { FC, useEffect, useState } from "react";
import classes from "./TypeUpdate.module.scss";
import TypeUpdateProps from "./TypeUpdate.props";
import { Type } from "@/shared/entities";
import { TypeHooks } from "@/entities/type";

const TypeUpdate: FC<TypeUpdateProps> = ({ isOpen = false, onClose = () => {}, type = null }) => {
  const [newType, setNewType] = useState<Type>({ id: "", name: "" });
  const [updateType, { isLoading, isError }] = TypeHooks.useUpdate();

  const setName = (value: string) => setNewType({ ...newType, name: value });

  const handlerCreate = async () => {
    try {
      await updateType(newType).unwrap();
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
      <h2>Изменение</h2>
      <div>{newType.id}</div>
      <div>{`isLoading : ${isLoading}`}</div>
      <div>{`isError : ${isError}`}</div>
      <input value={newType.name} onChange={(e) => setName(e.target.value)} />
      <div>
        <button onClick={onClose}>Отмена</button>
        <button onClick={handlerCreate}>Изменить</button>
      </div>
    </div>
  );
};

export default TypeUpdate;
