import { JSX } from "react";
import TypeUpdateProps from "./TypeUpdate.props";
import { Init, Type } from "@/shared/entities";
import { TypeHooks } from "@/entities/type";
import TypeEdit from "../TypeEdit";

function TypeUpdate({
  isOpen = false,
  onClose = () => {},
  type = Init.type,
}: TypeUpdateProps): JSX.Element {
  const [updateType, { isLoading }] = TypeHooks.useUpdate();

  return (
    <TypeEdit
      isOpen={isOpen}
      isLoading={isLoading}
      onClose={onClose}
      type={type}
      fetch={async (type: Type) => await updateType(type).unwrap()}
      error={(error) => console.log("ОШИБКА ПРИ ИЗМЕНЕНИИ ТИПА", error)}
      title="Изменить тип"
      button="Изменить"
    />
  );
}

export default TypeUpdate;
