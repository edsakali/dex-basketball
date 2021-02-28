import { FC } from "react";
import { Spinner } from "./Spiner";
import styled from "styled-components";

interface Props {
  loading: boolean;
}

export const LoadingBackdrop: FC<Props> = ({ loading, children }) => (
  <Wrapper>
    {children}
    {loading && (
      <Backdrop>
        <Spinner />
      </Backdrop>
    )}
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Backdrop = styled.div`
  z-index: 150;
  cursor: not-allowed;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
