import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderNav>
        <StyledHomeLink href="/">
          <StyledPageTitle>Header</StyledPageTitle>
        </StyledHomeLink>
        <StyledUnorderList>
          <StyledListItem>
            <Link href="/blog">Blog</Link>
          </StyledListItem>
          <StyledListItem>
            <Link href="/about">About</Link>
          </StyledListItem>
        </StyledUnorderList>
      </StyledHeaderNav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: white;
  position: sticky;
  top: 0;
  left: 0;
  border-bottom: 1px solid #e5e5e5;
  z-index: 999;
`;

const StyledHeaderNav = styled.nav`
  display: flex;
  max-width: 1336px;
  margin: auto;
  padding: 30px 0px;
  gap: 40px;
`;
const StyledPageTitle = styled.h1`
  font-size: 36px;
  color: black;
  text-transform: uppercase;
`;

const StyledHomeLink = styled(Link)`
  color: black;
  &:hover {
    text-decoration: none;
  }
`;

const StyledUnorderList = styled.ul`
  display: flex;
  text-decoration: none;
  list-style: none;
  gap: 40px;
`;

const StyledListItem = styled.li`
    font-size: 20px;
    font-weight: 500;
    a {
    color: black;
    &:hover {
        text-decoration: none;
    }
    }
`
