import { Type } from "@/shared/entities";

interface TypeUpdateProps {
  type?: Type | null;
  isOpen?: boolean;
  onClose?: () => void;
}

export default TypeUpdateProps;
