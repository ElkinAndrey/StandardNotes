import { Type } from "@/shared/entities";

interface TypeSelectProps {
  types?: Type[];
  value?: Type;
  setValue?: (value: Type) => void;
}

export default TypeSelectProps;
