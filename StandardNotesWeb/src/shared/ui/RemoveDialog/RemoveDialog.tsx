import { JSX } from "react";
import RemoveDialogProps from "./RemoveDialog.props";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

function RemoveDialog({
  text = "",
  isOpen = false,
  isLoading = false,
  onClose = () => {},
  remove = async () => {},
  error = async () => {},
}: RemoveDialogProps): JSX.Element {
  const handlerRemove = async () => {
    try {
      await remove();
      onClose();
    } catch (e) {
      error(e);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Удалить тип</DialogTitle>
      <DialogContent>{text}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button onClick={handlerRemove} loading={isLoading}>
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default RemoveDialog;
