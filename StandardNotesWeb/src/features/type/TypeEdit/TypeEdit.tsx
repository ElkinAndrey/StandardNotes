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
import { Check } from "@/shared/utils";

const initErrors = { name: "" };
const errorMessages = { name: { empty: "Укажите название типа" } };

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
  const [errors, setErrors] = useState({ ...initErrors });

  const setName = (value: string) => setNewType({ ...newType, name: value });
  const getNameError = () => new Check(newType.name, errorMessages.name).isEmpty().resultFirst();

  const checkName = () => {
    const error = getNameError();
    setErrors({ ...errors, name: error });
    return !error;
  };

  const handler = async () => {
    const nameError = getNameError();
    setErrors({ ...errors, name: nameError });
    if (nameError) return;
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
    setErrors({ ...initErrors });
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
          error={errors.name !== ""}
          helperText={errors.name}
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
