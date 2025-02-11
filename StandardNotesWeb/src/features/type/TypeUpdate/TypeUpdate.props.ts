import { Type } from "@/shared/entities";

interface TypeUpdateProps {
  type?: Type;
  isOpen?: boolean;
  onClose?: () => void;
}

export default TypeUpdateProps;
