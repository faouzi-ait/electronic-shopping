import styled from "styled-components";

export const RightNavContainer = styled.div`
  position: fixed;
  top: 4.1rem;
  width: 30%;
  height: 100vh;
  right: 0;
  background: #fff;
  padding: 1.5rem;
  padding-bottom: 7rem;
  border-left: 3px solid rgba(204, 204, 204, 0.274);
  overflow-y: scroll;
  z-index: 9999;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 2rem;
`;

export const ItemTitle = styled.p`
  text-transform: uppercase;
  margin: 0.5rem 0 0 0 !important;
  padding: 0 !important;
`;

export const ItemCount = styled.p`
  letter-spacing: 2px;
  font-style: italic;

  &::first-letter {
    text-transform: uppercase;
  }
`;
