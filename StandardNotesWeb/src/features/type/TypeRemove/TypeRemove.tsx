import { JSX } from "react";
import TypeRemoveProps from "./TypeRemove.props";
import { TypeHooks } from "@/entities/type";
import { RemoveDialog } from "@/shared/ui";
import { Init } from "@/shared/entities";

function TypeRemove({
  isOpen = false,
  onClose = () => {},
  type = Init.type,
}: TypeRemoveProps): JSX.Element {
  const [removeType, { isLoading }] = TypeHooks.useRemove();

  return (
    <RemoveDialog
      text={`Вы уверены, что хотите удалить тип "${type.name}"`}
      isOpen={isOpen}
      isLoading={isLoading}
      onClose={onClose}
      remove={async () => await removeType(type.id).unwrap()}
      error={(error) => console.log("ОШИБКА ПРИ УДАЛЕНИИ ТИПА", error)}
    />
  );
}

export default TypeRemove;
