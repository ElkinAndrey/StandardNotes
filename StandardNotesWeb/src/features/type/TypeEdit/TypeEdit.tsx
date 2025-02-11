import { FC, JSX, useEffect, useState } from "react";
import { Init, Type } from "@/shared/entities";
import TypeEditProps from "./TypeEdit.props";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

function TypeEdit({
  isOpen = false,
  isLoading = false,
  onClose = () => {},
  type = Init.type,
  fetch = async (_: Type) => {},
  error = (_: unknown) => {},
  title = "",
  button = "",
}: TypeEditProps): JSX.Element {
  const [newType, setNewType] = useState<Type>(Init.type);

  const setName = (value: string) => setNewType({ ...newType, name: value });
  const handler = async () => {
    try {
      await fetch(newType);
      onClose();
    } catch (e) {
      error(e);
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const newType = type ?? Init.type;
    setNewType({ ...newType });
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
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
        <Button onClick={handler} loading={isLoading}>
          {button}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default TypeEdit;
