import React from "react";
import Select from "react-select";
import { Control, FieldValues, Controller } from "react-hook-form";
import { ThemeConfig } from "react-select/src/theme";
import styled from "styled-components";

export interface SelectProps<TFieldValues extends FieldValues = FieldValues> {
  control: Control<TFieldValues>;
  nameSelect: string;
  options?: Array<{
    value: string | number | undefined;
    label: string | undefined;
  }>;
  label?: string;
  selectPageSize?: boolean;
}

const configTheme: ThemeConfig = (theme) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary50: "#FF768E",
    primary25: "#FF768E",
    primary: "#E4163A",
    neutral80: "#303030",
    neutral70: "#ffffff",
  },
});
export const CustomSelect = ({
  control,
  nameSelect,
  options,
  label,
  selectPageSize,
}: SelectProps) => (
  <SelectContainer>
    {label && <label>{label}</label>}
    <Controller
      name={nameSelect}
      control={control}
      options={options}
      defaultValue={selectPageSize && options ? options[0] : ""}
      classNamePrefix={"react-select"}
      theme={configTheme}
      as={<ReactSelect selectPageSize="true" />}
      maxMenuHeight={200}
      menuPlacement={selectPageSize ? "top" : "bottom"}
    />
  </SelectContainer>
);

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > label {
    color: ${({ theme }) => theme.colors.grey};
  }
`;
const ReactSelect = styled(Select)`
  .react-select__control {
    &:hover {
      background: #d1d1d1;
      transition: all 0.2s ease-in-out;
    }
    &:active {
      box-shadow: 0 0 5px #d9d9d9;
    }
    width: 100%;
    border-radius: 4px;
    box-shadow: none;
    border: none;
    background: #f6f6f6;
  }
  .react-select__menu {
    color: #9c9c9c;
    border-radius: 4px;
    border: 0.5px solid #d1d1d1;
  }

  .react-select__option {
    border-bottom: 0.5px solid #d1d1d1;
    &:last-child {
      border-bottom: none;
    }

    &:hover {
      color: #ffffff;
    }
  }

  .react-select_is-open > .react-select__control {
    border: 0.5px solid #9c9c9c;
  }
`;
