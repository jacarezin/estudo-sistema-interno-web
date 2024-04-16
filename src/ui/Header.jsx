import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";
import Button from "./Button";
import ResetButton from "../data/ResetButton";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;
const StyledHeader2 = styled.header`
  display: flex;
  padding: 0 4.8rem;
  background-color: var(--color-grey-0);
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader2>
      <ResetButton />

      <StyledHeader>
        <UserAvatar />
        <HeaderMenu />
      </StyledHeader>
    </StyledHeader2>
  );
}

export default Header;
