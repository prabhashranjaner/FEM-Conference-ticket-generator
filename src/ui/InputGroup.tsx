import type { ReactNode } from "react";
import styled from "styled-components";

const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: start;
  min-height: 100px;

  @media screen and (min-width: 786px) {
    min-height: 120px;
  }
`;

const Label = styled.p`
  font-size: 16px;
  @media screen and (min-width: 786px) {
    font-size: 20px;
  }
`;

const Sub = styled.p`
  display: flex;
  align-items: start;
  gap: 0.3rem;
  font-size: 13px;

  font-weight: 700;
  @media screen and (min-width: 786px) {
    font-size: 16px;
  }
`;
const Error = styled(Sub)`
  color: var(--col-orange-dark);
`;

const Info = styled(Sub)`
  color: var(--col-n-2);
`;
const InputGroup = ({ label, children, error = "", info = "" }: PropsType) => {
  return (
    <StyledInputGroup>
      <Label>{label}</Label>
      {children}
      {error ? (
        <Error>
          <img src="/images/icon-info.svg" alt="info" />
          <span>{error}</span>
        </Error>
      ) : info ? (
        <Info>
          <img src="/images/icon-info.svg" alt="info" />
          <span>{info}</span>
        </Info>
      ) : (
        <></>
      )}
    </StyledInputGroup>
  );
};

export default InputGroup;

type PropsType = {
  label: string;
  children: ReactNode;
  error?: string;
  info?: string;
};
