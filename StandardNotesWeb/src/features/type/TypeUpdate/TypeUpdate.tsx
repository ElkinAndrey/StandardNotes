import { FC } from "react";
import TypeUpdateProps from "./TypeUpdate.props";
import { Type } from "@/shared/entities";
import { TypeHooks } from "@/entities/type";
import TypeEdit from "../TypeEdit";

const TypeUpdate: FC<TypeUpdateProps> = ({ isOpen = false, onClose = () => {}, type = null }) => {
  const [updateType, { isLoading }] = TypeHooks.useUpdate();

  return (
    <TypeEdit
      isOpen={isOpen}
      isLoading={isLoading}
      onClose={onClose}
      type={type}
      fetch={async (type: Type) => await updateType(type).unwrap()}
      error={(e) => console.log("ОШИБКА ПРИ ИЗМЕНЕНИИ", e)}
      title="Изменить тип"
      button="Изменить"
    />
  );
};

export default TypeUpdate;
