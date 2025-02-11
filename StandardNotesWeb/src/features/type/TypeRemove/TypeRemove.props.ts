import { Type } from "@/shared/entities";

interface TypeRemoveProps {
  type?: Type;
  isOpen?: boolean;
  onClose?: () => void;
}

export default TypeRemoveProps;
