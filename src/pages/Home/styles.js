import styled from "styled-components";

import {
  ImgFavela,
} from '../../assets';

export const Container = styled.div`
  max-height: 100vh;
`;

export const Main = styled.main`
  padding: .75rem 3rem 1rem 3rem;
  height: calc(100vh -  45px);
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin: auto;
    padding: .75rem 0 1rem 0;
    width: 90%;
    height: calc(100vh - 61px);
  }
`;

export const Background = styled.section`
  width: 47%;
  background-image: url(${ImgFavela});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImageFav = styled.img`
  max-width: 100%;
  height: 100%;
`;

export const Section = styled.section`
  position: relative;
  margin: 1rem 2rem 0 3.2rem;
  width: 53%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 970px) {
    margin: 1rem 0 0 3.2rem;
  }
  
  @media (max-width: 768px) {
    margin: 0;
    padding-top: 1rem;
    width: 100%;
    background-image: url(${ImgFavela});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: center;
    background-size: cover;
    width: 100%;
    color: white;
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
  }
`;

export const ImgLogo = styled.img`
  width: 45%;
`;

export const LogoText = styled.h1`
  padding-bottom: 1rem;
  color: var(--color_black);
  font-size: 1rem;
  font-family: HandSean;
  max-width: 330px;
  text-align: center;
`;

export const Footer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;

  @media (max-width: 375px) {
    position: relative;
  }

  @media (min-height: 760px) {
    bottom: 30px;
  }
`;

export const ContentHighlight = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  min-height: 54px;
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
  padding-bottom: 1.25rem;
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

export const ContentPartnerships = styled.span`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  img {
    padding-right: 1rem;
  }
`;

export const ImgPartnerships = styled.img`
  width: 6rem;
  object-fit: contain;
`;

export const ImgICM = styled.img`
  width: 3.5rem;
`;
