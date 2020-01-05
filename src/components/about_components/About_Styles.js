import Styled from "styled-components";

export const AboutContainer = Styled.header`
   display: flex;
   justify-content: center;
   width: 70%;
   margin: 5rem auto;

   @media screen and (max-width: 1000px) {
      width: 85%
      flex-wrap: wrap;
   }
`;

export const LeftImage = Styled.div`
   background: ${props => props.bg};
   width: 65vh;
   height: 50vh;
   border: 4px solid darkgrey;
   border-radius: 3px;
`;
