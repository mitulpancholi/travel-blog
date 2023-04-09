import Head from "next/head";
import styled from "styled-components";
import BannerPost from "../components/pages/HomePage/BannerPost";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <section>
        <StyledIntroContainer>
          <StyledSubTitle>The Blog</StyledSubTitle>
          <StyledTitle>Writing from our team</StyledTitle>
          <StyledTitleDesc>
            The Latest Industry news, interviews, technologies and resources
          </StyledTitleDesc>
        </StyledIntroContainer>
        <BannerPost />
      </section>
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 1336px;
  margin: auto;
`;

const StyledIntroContainer = styled(Container)`
  padding: 80px 0px;
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 52px;
  margin-bottom: 40px;
`;

const StyledSubTitle = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

const StyledTitleDesc = styled.p`
  text-align: center;
  opacity: 0.8;
`;
