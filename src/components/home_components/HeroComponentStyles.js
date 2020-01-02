import Styled from "styled-components";

export const HomeHero = Styled.header`
   min-height: 100vh;
   background: url("../../resources/page-images/images/mainBcg.jpeg") center/cover no-repeat;
   display: flex;
   align-items: center;
   justify-content: center;
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

// .defaultHero,
// .roomsHero {
//   min-height: calc(100vh - 66px);
//   background: url("../../resources/images/defaultBcg.jpeg") center/cover no-repeat;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .roomsHero {
//   background-image: url("../../resources/images/room-2.jpeg");
//   min-height: 60vh;
// }
