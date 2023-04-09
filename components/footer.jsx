import Link from "next/link";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <StyledPageTitle>Header</StyledPageTitle>
        <StyledDescription>Tourism at its best</StyledDescription>
        <StyledNavigation>
          <UnorderList>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
          </UnorderList>
        </StyledNavigation>
        <div>
            <StyledFoot>@2023 TravelBlog. All right reserved.</StyledFoot>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: #e5e5e5;
  padding: 80px 80px 40px 80px;
`;

const StyledPageTitle = styled.h1`
  font-size: 36px;
  color: black;
  text-transform: uppercase;
`;

const StyledDescription = styled.p`
  margin-top: 10px;
`;

const StyledNavigation = styled.nav`
    margin-top: 40px;
`

const UnorderList = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;

  a {
    color: black;
    &:hover {
      text-decoration: none;
    }
  }
`;

const StyledFoot = styled.div`
    font-size: 14px;
    font-weight: 300;
    margin-top: 60px;
`
