import Check from "../Check";
import textsType from "./textsType";

const getNewValue = (value: string, list: textsType): string => {
  const messages = {
    empty: list.empty ?? undefined,
    notEmail: list.notEmail ?? undefined,
    min: list.min?.text ?? undefined,
    max: list.max?.text ?? undefined,
  };
  const check = new Check(value, messages);
  if (list.empty) check.isEmpty();
  if (list.notEmail) check.isNotEmail();
  if (list.min?.text) check.isMin(list.min?.length ?? 0);
  if (list.max?.text) check.isMax(list.max?.length ?? 0);
  return check.resultFirst();
};

export default getNewValue;
