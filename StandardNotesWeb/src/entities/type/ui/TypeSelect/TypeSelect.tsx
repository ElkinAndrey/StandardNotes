import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { JSX } from "react";
import TypeSelectProps from "./TypeSelect.props";
import { Init, Type } from "@/shared/entities";

function TypeSelect({
  types = [],
  value = Init.type,
  setValue = (_: Type) => {},
}: TypeSelectProps): JSX.Element {
  const setTypeById = (id: string = "") => {
    const newValue = (types ?? []).find((type) => type.id === id);
    setValue(newValue ?? Init.type);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Тип заметки</InputLabel>
      <Select label="Тип заметки" value={value.id} onChange={(e) => setTypeById(e.target.value)}>
        <MenuItem value="">
          <b>Нет типа</b>   
        </MenuItem>
        {(types ?? []).map((type) => (
          <MenuItem key={type.id} value={type.id}>
            {type.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default TypeSelect;
