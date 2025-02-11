import { JSX, useEffect, useState } from "react";
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
import { Check, useCheck } from "@/shared/utils";

const nameEmpty = "Укажите название типа";

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
  const [errorName, checkName, resetName] = useCheck(newType.name, { empty: nameEmpty });

  const setName = (value: string) => setNewType({ ...newType, name: value });

  const handler = async () => {
    if (checkName()) return;
    try {
      await fetch(newType);
      onClose();
    } catch (e) {
      error(e);
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    setNewType({ ...(type ?? Init.type) });
    resetName();
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextField
          label="Название"
          variant="filled"
          value={newType.name}
          onChange={(e) => setName(e.target.value)}
          onBlur={checkName}
          error={errorName !== ""}
          helperText={errorName}
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
