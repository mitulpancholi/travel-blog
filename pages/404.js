import styled from "styled-components";

const FourOFour = () => {
  return (
    <StyledWrapper>
      <span>404 | Page Not Found</span>
    </StyledWrapper>
  );
};

export default FourOFour;

const StyledWrapper = styled.div`
min-height: 680px;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`