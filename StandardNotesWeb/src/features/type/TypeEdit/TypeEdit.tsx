import { FC, useEffect, useState } from "react";
import { Type } from "@/shared/entities";
import TypeEditProps from "./TypeEdit.props";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const TypeEdit: FC<TypeEditProps> = ({
  isOpen = false,
  isLoading = false,
  onClose = () => {},
  type = { id: "", name: "" },
  fetch = async (_: Type) => {},
  error = (_: unknown) => {},
  title = "",
  button = "",
}) => {
  const [newType, setNewType] = useState<Type>({ id: "", name: "" });

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
    const newType = type ?? { id: "", name: "" };
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
};

export default TypeEdit;
