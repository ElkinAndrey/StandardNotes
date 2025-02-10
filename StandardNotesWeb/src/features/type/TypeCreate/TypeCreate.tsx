import { useState } from "react";
import classes from "./TypeCreate.module.scss";
import { Type } from "@/shared/entities";
import { TypeHooks } from "@/entities/type";

const TypeCreate = () => {
  const [type, setType] = useState<Type>({ id: "", name: "" });
  const setName = (value: string) => setType({ ...type, name: value });
  const [createType, { isLoading, isError }] = TypeHooks.useCreate();

  const handlerCreate = () => {
    createType(type);
  };

  return (
    <div className={classes.root}>
      <h2>Добавление</h2>
      <div>
        <div>{`isLoading : ${isLoading}`}</div>
        <div>{`isError : ${isError}`}</div>
        <input onChange={(e) => setName(e.target.value)} />
      </div>
      <button onClick={handlerCreate}>Добавить</button>
    </div>
  );
};

export default TypeCreate;
