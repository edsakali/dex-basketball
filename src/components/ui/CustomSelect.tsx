import React, { FC } from "react";
import Select, { StylesConfig } from "react-select";
import { Controller } from "react-hook-form";
import { Control, FieldValues } from "react-hook-form";
import { ThemeConfig } from "react-select/src/theme";

export interface SelectProps<TFieldValues extends FieldValues = FieldValues> {
  control: Control<TFieldValues>;
  nameSelect: string;
  isMulti?: boolean;
}
//
// const options = [
//   { value: "portland trail blazers", label: "Portland trail blazers" },
//   { value: "minnesota timberwolves", label: "Minnesota timberwolves" },
//   { value: "oklahoma city thunder", label: "Oklahoma city thunder" },
//   { value: "memphis Grizzlies", label: "Memphis Grizzlies" },
//   { value: "denver Nuggets", label: "Denver Nuggets" },
//   {
//     value: "philadelphia seventy sixers",
//     label: "Philadelphia seventy sixers",
//   },
// ];

const customStyles: StylesConfig<{ value: string; label: string }, boolean> = {
  singleValue: (prov, state) => ({
    ...prov,
    color: "#9C9C9C",
    fontSize: "18px",
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected || state.isFocused ? "#ffffff" : "#9C9C9C",
    paddingLeft: "20px",
    borderBottom: "0.5px solid #D1D1D1 ",
    fontSize: "18px",
  }),
  menu: (provided, state) => ({
    ...provided,
    width: "88px",
    height: "40px",
    borderRadius: "4px",
  }),
  control: (provided, state) => ({
    ...provided,
    boxShadow: "none",
    border:
      state.menuIsOpen || state.isFocused
        ? "0.5px solid #9C9C9C"
        : " 0.5px solid #D1D1D1",
    width: "88px",
    borderRadius: "4px",
  }),
};
const options = [
  { value: "6", label: "6" },
  { value: "12", label: "12" },
  { value: "24", label: "24" },
];

const configTheme: ThemeConfig = (theme) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary50: "#FF768E",
    primary25: "#FF768E",
    primary: "#E4163A",
  },
});
export const CustomSelect: FC<SelectProps> = ({ control, nameSelect }) => (
  <Controller
    name={nameSelect}
    control={control}
    options={options}
    defaultValue={options[0]}
    styles={customStyles}
    theme={configTheme}
    as={Select}
    maxMenuHeight={200}
    menuPlacement="top"
  />
);
