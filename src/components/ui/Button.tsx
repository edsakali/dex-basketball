import styled from "styled-components";

export const Button = styled.button<{ cancelBtn?: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ cancelBtn, theme }) =>
    cancelBtn ? theme.colors.lightGrey : "#ffffff"};
  width: 100%;
  height: 32px;
  margin: 24px 0;
  outline: none;
  border: ${({ cancelBtn, theme }) =>
    cancelBtn ? `1px solid ${theme.colors.lightGrey}` : "none"};
  border-radius: 4px;
  background: ${({ cancelBtn, theme }) =>
    cancelBtn ? "transparent" : theme.colors.red};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ cancelBtn, theme }) =>
      cancelBtn ? theme.colors.lightestGrey : theme.colors.lightRed};
    color: ${({ cancelBtn, theme }) =>
      cancelBtn ? theme.colors.lightGrey : "#ffffff"};
    transition: all 0.2s ease-in-out;
  }

  &:active {
    background: ${({ cancelBtn, theme }) =>
      cancelBtn ? theme.colors.lightGrey : theme.colors.darkRed};
    color: ${({ cancelBtn, theme }) =>
      cancelBtn ? theme.colors.grey : "#ffffff"};
    transition: all 0.2s ease-in-out;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.lightestGrey};
    background: ${({ theme }) => theme.colors.lightestGrey1};
    border: ${({ cancelBtn, theme }) =>
      cancelBtn ? `1px solid ${theme.colors.grey}` : "none"};
    transition: all 0.2s ease-in-out;
  }
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    height: 40px;
  }
`;
