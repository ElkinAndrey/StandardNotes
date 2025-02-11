interface RemoveDialogProps {
  text?: string;
  isOpen?: boolean;
  isLoading?: boolean;
  onClose?: () => void;
  remove?: () => Promise<unknown>;
  error?: (error: unknown) => void;
}

export default RemoveDialogProps;
