import ReactSelect from "react-select";
import { Control, FieldValues, Controller } from "react-hook-form";
import styled from "styled-components";
import { configTheme, SelectStyles } from "./SelectStyles";
import { OptionsType } from "react-select/src/types";
import { LoadState } from "../../../redux/loadState";

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

export const Select = ({
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
    <SelectStyles
      selectPageSize={selectPageSize}
      selectTeamName={selectTeamName}
    >
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
        as={<ReactSelect />}
        maxMenuHeight={300}
        menuPlacement={selectPageSize ? "top" : "bottom"}
      />
    </SelectStyles>
  </SelectContainer>
);

const SelectContainer = styled.div`
  & > label {
    line-height: 24px;
    color: ${({ theme }) => theme.colors.grey};
    margin-bottom: 8px;
  }
`;
