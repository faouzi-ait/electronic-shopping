import Styled from "styled-components";

// PASS THE BACKGROUD IMAGE AS A PROPS
export const HomeHero = Styled.header`
   min-height: 100vh;
   background: ${props => props.bg};
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const AboutHero = Styled.header`
   min-height: 50vh;
   background: ${props => props.bg};
   margin-top: -35vh;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const CartHero = Styled.header`
   min-height: 50vh;
   background: ${props => props.bg};
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const AboutFilter = Styled.div`
   min-height: 50vh;
   width: 100vw;
   background: var(--mainblack);
   opacity: .3;
   v-index: -99999;
`;

export const HomePageTitle = Styled.h1`
   font-size: 4rem;
   text-align: center;
   color: var(--mainwhite);
   text-shadow: 2px 2px 3px var(--mainblack);
   text-transform: uppercase;
   letter-spacing: 3px;
`;

export const HomePageLink = Styled.a`
   display: block;
   padding: 10px 25px;
   border: 2px solid var(--primary);
   font-size: 1rem;
   text-shadow: none;
   letter-spacing: 3px;
   width: 42%;
`;
