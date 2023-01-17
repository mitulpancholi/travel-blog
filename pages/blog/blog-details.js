import styled from "styled-components";

const BlogDetail = () => {
  return (
    <BlogSection>
      <StyledCategory>Design</StyledCategory>
      <BlogTitle>
        How India Made its mark in world : Global Recession Index
      </BlogTitle>
      <BlogDescription>
        How do you create compelling presentations that wow your collegues and impress your managers? Here&apos;s How to get started.
      </BlogDescription>
    </BlogSection>
  );
};

export default BlogDetail;

const StyledCategory = styled.span`
  text-align: center;
  display: block;
  font-size: 20px;
  font-weight: 500;
`;

const BlogTitle = styled.h1`
  text-align: center;
  font-size: 52px;
  font-weight: 500;
  max-width: 800px;
  margin: auto;
  width: max-content;
  line-height: 100%;
`;

const BlogSection = styled.section`
  padding: 60px 0px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const BlogDescription = styled.p`
  max-width: 800px;
  margin: auto;
  width: max-content;
  text-align: center;
  font-size: 20px;
  font-weight: 300;
`;
