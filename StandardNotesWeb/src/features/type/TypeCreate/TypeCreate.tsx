import { FC } from "react";
import { Type } from "@/shared/entities";
import { TypeHooks } from "@/entities/type";
import TypeCreateProps from "./TypeCreate.props";
import TypeEdit from "../TypeEdit";

const TypeCreate: FC<TypeCreateProps> = ({ isOpen = false, onClose = () => {} }) => {
  const [createType, { isLoading }] = TypeHooks.useCreate();

  return (
    <TypeEdit
      isOpen={isOpen}
      isLoading={isLoading}
      onClose={onClose}
      type={{ id: "", name: "" }}
      fetch={async (type: Type) => await createType(type).unwrap()}
      error={(e) => console.log("ОШИБКА ПРИ ДОБАВЛЕНИИ", e)}
      title="Добавить тип"
      button="Добавить"
    />
  );
};

export default TypeCreate;
