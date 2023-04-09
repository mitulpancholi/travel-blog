import Image from "next/image";
import styled from "styled-components";

const BannerPost = () => {
  return (
    <StyledSection>
      <StyledImageWrapper>
        <Image src="/images/sample-image.jpg" fill alt="Banner Image" />
      </StyledImageWrapper>
      
    </StyledSection>
  );
};

export default BannerPost;

const StyledImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  z-index: -1;
  display: inline-flex;
  /* margin-top: 20px; */
  width: 100%;
  height: auto;
  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: 100% !important;
  }
`;

const StyledSection = styled.div`

`;
