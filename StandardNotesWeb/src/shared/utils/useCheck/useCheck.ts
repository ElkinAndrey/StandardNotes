import { useEffect, useState } from "react";
import Check from "../Check";
import useCheckType from "./useCheckType";
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

function useCheck(state: string, texts: textsType): useCheckType {
  const getCheck = (state: string) => () => () => {
    const value = getNewValue(state, texts);
    setError(value);
    return !!value;
  };

  const [error, setError] = useState("");
  const [checkStart, setCheckStart] = useState<() => boolean>(getCheck(state));

  const reset = () => setError("");

  useEffect(() => {
    setError("");
    setCheckStart(getCheck(state));
  }, [state]);

  return [error, checkStart, reset];
}

export default useCheck;
