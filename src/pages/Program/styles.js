import styled from "styled-components";

import {
  ImgFavela,
} from '../../assets';

export const Container = styled.div`
  max-height: 100vh;
  overflow: hidden;
`;

export const Main = styled.main`
  height: calc(100vh -  70px);
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Background = styled.section`
  width: 80%;
  background-image: url(${ImgFavela});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 37%;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    background-color: white;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: .8;
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 100vw;
    height: 80%;
  }
`;

export const ContentText = styled.p`
  padding: 4.5rem 3rem;
  height: 100%;
  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    width: 0;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent; 
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: transparent; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: transparent; 
  }
`;

export const BackText = styled.p`
  padding-bottom: .75rem;
  max-width: 695px;
  font-size: 1rem;
  color: var(--color_lightGray);
  font-family: FiraSans;
`;

export const ImageFav = styled.img`
  max-width: 100%;
  height: 100%;
`;

export const Section = styled.section`
  position: relative;
  width: 30%;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100vw;
    height:  20%;
    flex-direction: row;
  }
`;

export const ContentLogo = styled.div`
  padding-top: 1rem;
  min-height: 127px;
  background: var(--color_mustard);
  display: flex;
  flex-direction: column;
  align-items: center;
  // height: 190px;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
  }
`;

export const BackgBlack = styled.div`
  width: 100%;
  height: 1rem;
  background: var(--color_black);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImgLogo = styled.img`
  width: 45%;
`;

export const LogoText = styled.h1`
  padding-bottom: 1rem;
  max-width: 10rem;
  color: var(--color_black);
  font-size: .5rem;
  font-family: HandSean;
  text-align: center;
`;

export const Footer = styled.div`
  width: 100%;
  min-height: 60%;
  height: 79%;
  text-align: center;

  div:fist-child {
    height: auto;
  }

  @media (max-width: 768px) {
    height: 100%;
  }

  @media (max-width: 375px) {
    position: relative;
  }

  // @media (min-height: 760px) {
  //   bottom: 30px;
  // }
`;

export const ImagemFavela = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0rem -5rem;
`;


export const ContentHighlight = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  // min-height: 54px;
  background: var(--color_mustard);
  display: flex;
  justify-content: space-between;
  border: 1px solid #0000007d;

  @media (max-width: 768px) {
    margin: auto;
    width: 90%;
    max-width: 490px;
  }
`;

export const TextAchievement = styled.p`
  padding-top: 0.5rem;
  font-size: .5rem;
  font-family: HandSean; 
  color: var(--color_black);
  text-align: center;

  @media (max-width: 768px) {
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }
`;

export const BackHighlight = styled.div`
  display: flex;
`;

export const TextHighlight = styled.p`
  padding: 0 .75rem;
  font-size: 1.3rem;
  font-family: FallingSky Bold; 
  color: var(--color_white);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-self: center;
`;

export const Text = styled.p`
  padding-bottom: 1rem;
  max-width: 470px;
  font-size: .85rem;
  font-family: FallingSky;
  color: var(--color_lightGray);
  text-align: center;

  @media (max-width: 425px) {
    max-width: 430px;
  }
`;

export const Span = styled.span`
  width: 2.5rem;
  background: ${props => props.color};

  @media (max-width: 570px) {
    display: ${props => props.none && 'none'};
  }
`;

export const ContentPartnerships = styled.div`
  padding-bottom: 5px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  // flex-direction: row;

  img {
    padding-right: 1rem;
  }

  @media (max-width: 768px) {
   display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 100px 2fr;
    gap: 20px 10px;
    row-gap: 20px;
    column-gap: 10px;
  }
`;

export const ImgPartnerships = styled.img`
  width: 25%;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ImgICM = styled.img`
  width: 3.5rem;

  @media (max-width: 768px) {
    width: 56%;
  }
`;

export const DivImage = styled.div`
  height: 100%;
  background-image: url(${ImgFavela});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top 60% left 0;

  @media (max-width: 768px) {
    display: none;
  }
`;
