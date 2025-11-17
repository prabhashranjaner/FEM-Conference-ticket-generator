import styled from "styled-components";
import { useStateData } from "../context/StateContextProvider";

const StyledTicket = styled.div`
  width: 300px;
  margin: 0 auto;
  text-align: left;
  position: relative;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media screen and (min-width: 786px) {
    height: 280px;
    width: 500px;
    justify-content: space-between;
    padding: 3rem 2rem;
  }
`;

const Top = styled.div``;

const Image = styled.img`
  width: 95%;
  position: absolute;
  inset: 0;
  height: 95%;
  object-fit: contain;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 160px;

  @media screen and (min-width: 786px) {
    width: 220px;
  }
`;

const Place = styled.p`
  font-size: 14px;
  color: var(--col-n-2);
  margin: 2px 30px;

  @media screen and (min-width: 786px) {
    font-size: 18px;
    margin: 5px 40px;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media screen and (min-width: 786px) {
    gap: 18px;
  }
`;

const Avatar = styled.img`
  width: 40px;
  border-radius: 8px;
  @media screen and (min-width: 786px) {
    width: 70px;
  }
`;

const UserInfo = styled.div`
  h4 {
    @media screen and (min-width: 786px) {
      font-size: 23px;
    }
  }
`;

const TicketNo = styled.div`
  position: absolute;
  top: 60%;
  transform: rotate(-90deg) translateX(50%);
  right: 5px;
  color: var(--col-n-2);

  font-size: 18px;

  @media screen and (min-width: 786px) {
    font-size: 24px;
    right: 20px;
    transform: rotate(-90deg) translateX(60%);
  }
`;

const GitHub = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;

  img {
    width: 16px;
    @media screen and (min-width: 786px) {
      width: 20px;
    }
  }

  span {
    font-size: 15px;
    color: var(--col-n-2);

    @media screen and (min-width: 786px) {
      width: 20px;
    }
  }
`;

const Ticket = () => {
  const { state } = useStateData();
  return (
    <StyledTicket>
      <Image alt="ticket" src="/images/pattern-ticket.svg" />

      <Top>
        <Logo alt="logo" src="/images/logo-full.svg" />
        <Place>Jan 31, 2025 / Austin, TK</Place>
      </Top>

      <Bottom>
        <Avatar src={state.imageURL} alt="avatar" />
        <UserInfo>
          <h4>{state.name}</h4>

          <GitHub>
            <img src="/images/icon-github.svg" alt="github" />
            <span> @{state.github}</span>
          </GitHub>
        </UserInfo>
      </Bottom>
      <TicketNo>60910#</TicketNo>
    </StyledTicket>
  );
};

export default Ticket;
