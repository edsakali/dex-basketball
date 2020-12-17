import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  width: 100%;
  height: 40px;
  margin: 40px 0;
  outline: none;
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.red};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.lightRed};
    transition: all 0.2s ease-in-out;
  }

  &:active {
    background: ${({ theme }) => theme.colors.darkRed};
    transition: all 0.2s ease-in-out;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.lightestGrey};
    background: ${({ theme }) => theme.colors.lightestGrey1};
    transition: all 0.2s ease-in-out;
  }
`;
