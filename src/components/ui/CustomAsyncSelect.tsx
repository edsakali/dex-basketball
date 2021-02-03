import { Control, FieldValues, Controller } from "react-hook-form";
import styled from "styled-components";
import AsyncSelect from "react-select/async";
import { ThemeConfig } from "react-select/src/theme";
import React from "react";

export interface SelectProps<TFieldValues extends FieldValues = FieldValues> {
  control: Control<TFieldValues>;
  nameSelect: string;
  loadOptions?: any;
  label?: string;
  isMulti?: boolean;
}

const configTheme: ThemeConfig = (theme) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary50: "#FF768E",
    primary25: "#FF768E",
    primary: "#E4163A",
    neutral80: "#9c9c9c",
    neutral70: "#ffffff",
  },
});

export const CustomAsyncSelect = ({
  control,
  nameSelect,
  label,
  loadOptions,
}: SelectProps) => {
  return (
    <SelectContainer>
      {label && <label>{label}</label>}
      <Controller
        name={nameSelect}
        control={control}
        theme={configTheme}
        cacheOptions
        classNamePrefix="react-select"
        defaultValue=""
        loadOptions={loadOptions}
        as={<ReactAsyncSelect />}
      />
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > label {
    color: ${({ theme }) => theme.colors.grey};
  }
`;
const ReactAsyncSelect = styled(AsyncSelect)`
  .react-select__control {
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

  &.react-select.is-focused > .react-select__menu-list {
    color: red;
    border-radius: 4px;
  }

  .react-select_is-open > .react-select__control {
    border: 0.5px solid #9c9c9c;
  }
`;
