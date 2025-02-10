import { FC, useEffect, useState } from "react";
import TypeRemoveProps from "./TypeRemove.props";
import { TypeHooks } from "@/entities/type";
import { Type } from "@/shared/entities";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

const TypeRemove: FC<TypeRemoveProps> = ({ isOpen = false, onClose = () => {}, type = null }) => {
  const [newType, setNewType] = useState<Type>({ id: "", name: "" });
  const [removeType, { isLoading }] = TypeHooks.useRemove();

  const handlerRemove = async () => {
    try {
      await removeType(newType.id).unwrap();
      onClose();
    } catch (error) {
      console.log("ОШИБКА ПРИ УДАЛЕНИИ", error);
    }
  };

  useEffect(() => {
    const newType = type ?? { id: "", name: "" };
    setNewType({ ...newType });
  }, [type]);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Удалить тип</DialogTitle>
      <DialogContent>{`Тип с id ${newType.id} и именем ${newType.name}`}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button onClick={handlerRemove} loading={isLoading}>
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TypeRemove;
