import { FC, useEffect, useState } from "react";
import { Type } from "@/shared/entities";
import { TypeHooks } from "@/entities/type";
import TypeCreateProps from "./TypeCreate.props";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const TypeCreate: FC<TypeCreateProps> = ({ isOpen = false, onClose = () => {} }) => {
  const [newType, setNewType] = useState<Type>({ id: "", name: "" });
  const setName = (value: string) => setNewType({ ...newType, name: value });
  const [createType, { isLoading }] = TypeHooks.useCreate();

  const handlerCreate = async () => {
    try {
      await createType(newType).unwrap();
      onClose();
    } catch (error) {
      console.log("ОШИБКА ПРИ ДОБАВЛЕНИИ", error);
    }
  };

  useEffect(() => {
    if (isOpen) setNewType({ id: "", name: "" });
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Добавить тип</DialogTitle>
      <DialogContent>
        <TextField
          value={newType.name}
          onChange={(e) => setName(e.target.value)}
          label="Название"
          variant="filled"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button onClick={handlerCreate} loading={isLoading}>
          Добавить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TypeCreate;
