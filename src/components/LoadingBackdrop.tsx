import { Spinner } from "./Spiner";
import styled from "styled-components";

export const LoadingBackdrop = () => (
  <Wrapper>
    <Spinner />
  </Wrapper>
);

const Wrapper = styled.div`
  z-index: 150;
  background: rgba(0, 0, 0, 0.3);
  cursor: not-allowed;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
