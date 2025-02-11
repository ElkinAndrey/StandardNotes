import { JSX } from "react";
import { Init, Type } from "@/shared/entities";
import { TypeHooks } from "@/entities/type";
import TypeCreateProps from "./TypeCreate.props";
import TypeEdit from "../TypeEdit";

function TypeCreate({ isOpen = false, onClose = () => {} }: TypeCreateProps): JSX.Element {
  const [createType, { isLoading }] = TypeHooks.useCreate();

  return (
    <TypeEdit
      isOpen={isOpen}
      isLoading={isLoading}
      onClose={onClose}
      type={Init.type}
      fetch={async (type: Type) => await createType(type).unwrap()}
      error={(e) => console.log("ОШИБКА ПРИ ДОБАВЛЕНИИ ТИПА", e)}
      title="Добавить тип"
      button="Добавить"
    />
  );
}

export default TypeCreate;
