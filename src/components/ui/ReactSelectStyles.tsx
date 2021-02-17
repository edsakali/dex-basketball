import styled from "styled-components";
import { ThemeConfig } from "react-select/src/theme";

export const ReactSelectStyles = styled.div`
  .react-select__control {
    width: 100%;
    min-height: 40px;
    border-radius: 4px;
    box-shadow: none;
    border: none;
    background: #f6f6f6;

    &:hover {
      background: #d1d1d1;
      transition: all 0.2s ease-in-out;
    }
    &:active {
      box-shadow: 0 0 5px #d9d9d9;
    }
  }

  .react-select__multi-value {
    padding: 4px 0;
    background: #e4163a;
    color: #ffffff;
    border-radius: 4px;
  }

  .react-select__multi-value__remove {
    &:hover {
      background: #ff768e;
      color: #ffffff;
    }
  }

  .react-select__loading-indicator > span {
    font-size: 8px;
    color: #e4163a;
  }

  .react-select__multi-value__label {
    color: #ffffff;
  }

  .react-select__menu {
    color: #9c9c9c;
    border-radius: 4px;
    border: 0.5px solid #d1d1d1;
  }
  .react-select__option--is-focused {
    color: #ffffff;
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
