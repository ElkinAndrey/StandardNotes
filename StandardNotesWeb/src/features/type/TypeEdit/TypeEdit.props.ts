import { Type } from "@/shared/entities";

interface TypeEditProps {
  isOpen?: boolean;
  title?: string;
  button?: string;
  isLoading?: boolean;
  type?: Type | null;
  onClose?: () => void;
  fetch?: (value: Type) => Promise<unknown>;
  error?: (error: unknown) => void;
}

export default TypeEditProps;
