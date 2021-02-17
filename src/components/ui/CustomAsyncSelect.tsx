import { Control, Controller } from "react-hook-form";
import styled from "styled-components";
import AsyncSelect from "react-select/async";
import React from "react";
import { configTheme, ReactSelectStyles } from "./ReactSelectStyles";
import { LoadState } from "../../redux/loadState";

export interface SelectAsyncProps {
  control: Control;
  nameSelect: string;
  loadOptions: (inputValue: string) => Promise<any> | void;
  label?: string;
  isMulti?: boolean;
  loading: LoadState;
}

export const CustomAsyncSelect = ({
  control,
  nameSelect,
  label,
  loadOptions,
  isMulti,
  loading,
}: SelectAsyncProps) => {
  return (
    <SelectContainer>
      {label && <label>{label}</label>}
      <ReactSelectStyles>
        <Controller
          name={nameSelect}
          control={control}
          theme={configTheme}
          isMulti={isMulti}
          cacheOptions
          isLoading={loading === LoadState.pending}
          classNamePrefix="react-select"
          defaultValue
          as={<AsyncSelect loadOptions={loadOptions} />}
        />
      </ReactSelectStyles>
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
