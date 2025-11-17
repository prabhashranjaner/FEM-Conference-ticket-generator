import styled from "styled-components";
import { useStateData } from "../context/StateContextProvider";
import Ticket from "./Ticket";

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  margin-top: 1.5rem;

  @media screen and (min-width: 786px) {
    gap: 1.5rem;
    margin-top: 2.5rem;
  }
`;

const Heading = styled.h2`
  font-size: 26px;
  width: 90%;
  margin: 0 auto;
  line-height: 30px;
  @media screen and (min-width: 786px) {
    font-size: 36px;
    line-height: 40px;
    width: 70%;
  }
`;

const Name = styled.span`
  background-image: linear-gradient(
    to right,
    hsl(7, 86%, 67%),
    hsl(0, 0%, 100%)
  );
  background-clip: text;
  color: transparent;
`;

const SubHeading = styled.p`
  color: var(--col-n-2);
  width: 80%;
  margin: 0 auto;
  font-weight: 700;
  line-height: 20px;
  font-size: 16px;

  @media screen and (min-width: 786px) {
    font-size: 20px;
    width: 70%;
    line-height: 26px;
  }
`;

const Email = styled.span`
  color: var(--col-orange);
`;

const TicketWrapper = styled.div`
  margin-top: 1rem;
`;

const SecondPage = () => {
  const { state } = useStateData();
  return (
    <PageWrapper>
      <Heading>
        Congrats, <Name>{state.name}!</Name> Your ticket is ready.
      </Heading>

      <SubHeading>
        We've emailed your ticket to <Email>{state.email}</Email> and will send
        updated in the run up to the event
      </SubHeading>

      <TicketWrapper>
        <Ticket />
      </TicketWrapper>
    </PageWrapper>
  );
};

export default SecondPage;
