import styled from "styled-components";

export const StyledH1 = styled.h1`
  font-weight: 400;

  @media screen and(max-width: ${({theme}) => theme.mobile }) {
    padding-right: 1rem;
  }
`;

export const StyledH4 = styled.h4`
  font-weight: 700;
`;

export const StyledP = styled.p`
  max-width: 1000px;
  padding: 0 1rem 1rem 0; 
  line-height: 1.5;
`;

export const StyledH3 = styled.h3`
  font-weight: 600;
`;

export const StyledLi = styled.li`
  font-weight: 500;
  list-style-type: none;
`;
