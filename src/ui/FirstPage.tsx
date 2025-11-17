import styled from "styled-components";
import Form from "./Form";

const PageWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;

  @media screen and (min-width: 786px) {
    gap: 1.5rem;
  }
`;

const Heading = styled.h2`
  font-size: 22px;
  width: 80%;
  margin: 0 auto;
  /* margin-top: 1rem; */

  @media screen and (min-width: 786px) {
    font-size: 36px;
  }
`;

const SubHeading = styled.p`
  color: var(--col-n-2);
  width: 80%;
  margin: 0 auto;
  @media screen and (min-width: 786px) {
    font-size: 18px;
  }
`;

const FirstPage = () => {
  return (
    <PageWrapper>
      <Heading>Your Journey to Coding Conf 2025 Starts Here!</Heading>

      <SubHeading>
        Secure your spot at next year's biggest coding conference
      </SubHeading>

      <Form />
    </PageWrapper>
  );
};

export default FirstPage;
