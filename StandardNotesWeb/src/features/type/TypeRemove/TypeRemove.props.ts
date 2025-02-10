import { Type } from "@/shared/entities";

interface TypeRemoveProps {
  type?: Type | null;
  isOpen?: boolean;
  onClose?: () => void;
}

export default TypeRemoveProps;
