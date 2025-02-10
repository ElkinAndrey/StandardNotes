import { FC, useEffect, useState } from "react";
import classes from "./TypeUpdate.module.scss";
import TypeUpdateProps from "./TypeUpdate.props";
import { Type } from "@/shared/entities";
import { TypeHooks } from "@/entities/type";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const TypeUpdate: FC<TypeUpdateProps> = ({ isOpen = false, onClose = () => {}, type = null }) => {
  const [newType, setNewType] = useState<Type>({ id: "", name: "" });
  const [updateType, { isLoading }] = TypeHooks.useUpdate();

  const setName = (value: string) => setNewType({ ...newType, name: value });

  const handlerUpdate = async () => {
    try {
      await updateType(newType).unwrap();
      onClose();
    } catch (error) {
      console.log("ОШИБКА ПРИ ИЗМЕНЕНИИ", error);
    }
  };

  useEffect(() => {
    const newType = type ?? { id: "", name: "" };
    setNewType({ ...newType });
  }, [type]);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Изменить тип</DialogTitle>
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
        <Button onClick={handlerUpdate} loading={isLoading}>
          Изменить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TypeUpdate;
