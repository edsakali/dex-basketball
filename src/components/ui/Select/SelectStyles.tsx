import styled from "styled-components";
import { ThemeConfig } from "react-select/src/theme";

export const SelectStyles = styled.div<{
  selectPageSize?: boolean;
  selectTeamName?: boolean;
}>`
  .react-select__value-container {
    padding: 0 12px;
    height: 100%;
  }
  .react-select__control {
    width: 100%;
    min-height: 40px;
    border-radius: 4px;
    box-shadow: none;
    border: none;
    background: ${({ selectPageSize, selectTeamName, theme }) =>
      selectPageSize || selectTeamName
        ? theme.colors.white
        : theme.colors.lightestGrey1};

    &:hover {
      background: ${({ theme }) => theme.colors.lightestGrey};
      transition: all 0.2s ease-in-out;
    }

    &:active {
      box-shadow: 0 0 5px #d9d9d9;
    }
  }

  .react-select__value-container--has-value {
    flex-wrap: nowrap;
  }

  .react-select__control .react-select__multi-value {
    padding: 4px 0;
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
  }

  .react-select__multi-value__remove {
    &:hover {
      background: ${({ theme }) => theme.colors.lightestRed};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .react-select__loading-indicator > span {
    font-size: 8px;
    color: ${({ theme }) => theme.colors.red};
  }

  .react-select__multi-value__label {
    color: ${({ theme }) => theme.colors.white};
  }

  .react-select__menu {
    color: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 4px;
    border: 0.5px solid ${({ theme }) => theme.colors.lightestGrey};
  }

  .react-select__menu > div {
    padding: 0;
    border-radius: 4px;
  }

  .react-select__option--is-focused {
    color: ${({ theme }) => theme.colors.white};
  }

  .react-select__option {
    cursor: pointer;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.lightestGrey};
    &:last-child {
      border-bottom: none;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .react-select_is-open > .react-select__control {
    border: 0.5px solid ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const configTheme: ThemeConfig = (theme) => ({
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
