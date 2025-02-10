import { FC, useState } from "react";
import classes from "./TypeCreate.module.scss";
import { Type } from "@/shared/entities";
import { TypeHooks } from "@/entities/type";
import TypeCreateProps from "./TypeCreate.props";

const TypeCreate: FC<TypeCreateProps> = ({ isOpen = false, onClose = () => {} }) => {
  const [newType, setNewType] = useState<Type>({ id: "", name: "" });
  const setName = (value: string) => setNewType({ ...newType, name: value });
  const [createType, { isLoading, isError }] = TypeHooks.useCreate();

  const handlerCreate = async () => {
    try {
      await createType(newType).unwrap();
      onClose();
    } catch {
      console.log("Ошибка");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={classes.root}>
      <h2>Добавление</h2>
      <div>
        <div>{`isLoading : ${isLoading}`}</div>
        <div>{`isError : ${isError}`}</div>
        <input onChange={(e) => setName(e.target.value)} />
      </div>
      <button onClick={onClose}>Отмена</button>
      <button onClick={handlerCreate}>Добавить</button>
    </div>
  );
};

export default TypeCreate;
