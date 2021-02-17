import React from "react";
import Select from "react-select";
import { Control, FieldValues, Controller } from "react-hook-form";
import styled from "styled-components";
import { configTheme, ReactSelectStyles } from "./ReactSelectStyles";
import { OptionsType } from "react-select/src/types";
import { LoadState } from "../../redux/loadState";

export type SelectOptions = OptionsType<{
  value?: string | number;
  label?: string;
}>;

export interface SelectProps<TFieldValues extends FieldValues = FieldValues> {
  control: Control<TFieldValues>;
  nameSelect: string;
  options?: SelectOptions;
  label?: string;
  selectPageSize?: boolean;
  selectTeamName?: boolean;
  isMulti?: boolean;
  handleInputChange?: (newValue: string) => void;
  loading?: LoadState;
}

export const CustomSelect = ({
  control,
  nameSelect,
  options,
  label,
  selectPageSize,
  selectTeamName,
  isMulti,
  handleInputChange,
  loading,
}: SelectProps) => (
  <SelectContainer>
    {label && <label>{label}</label>}
    <ReactSelectStyles>
      <Controller
        name={nameSelect}
        control={control}
        options={options}
        isMulti={isMulti}
        isLoading={loading === LoadState.pending}
        onInputChange={handleInputChange}
        isClearable={!selectPageSize && !selectTeamName && true}
        defaultValue={selectPageSize && options ? options[0] : ""}
        classNamePrefix={"react-select"}
        theme={configTheme}
        as={<Select />}
        maxMenuHeight={200}
        menuPlacement={selectPageSize ? "top" : "bottom"}
      />
    </ReactSelectStyles>
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
