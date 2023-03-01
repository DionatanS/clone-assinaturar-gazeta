import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BackgroundHeroDesktop from '../assets/images/header-desktop-104.png';
import BackgroundHeroMobile from '../assets/images/header-mobile-104.png';

const ContentHero = styled.div`
  height: auto;
  position: relative;
  &::before {
    width: 100%;
    display: block;
    content: '';
    padding-top: 25.4%;
    @media (max-width: ${({theme}) => theme.breakpoints.mobileMd}) {
        /* padding-top: 25%; */
        height: 100vh;
    }
  }
`;
const BackgroundHeroStyled = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

const AssineButton = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 14%;
  background-color: #28ace4;
  border-radius: 24px;
  border: none;
  color: #1a1a1a;
  font-size: 2rem;
  font-weight: bold;
  padding-top: 3px;
  top: 70%;
  left: 49.2%;
  position: absolute;
  cursor: pointer;
  @media (max-width: ${({theme}) => theme.breakpoints.desktopLg}) {
    font-size: 1.4rem;
  }
  @media (max-width: ${({theme}) => theme.breakpoints.desktopMd}) {
    font-size: 1rem;
  }
  @media (max-width: ${({theme}) => theme.breakpoints.desktopLg}) {
    font-size: 0.6rem;
  }
  @media (max-width: ${({theme}) => theme.breakpoints.mobileMd}) {
    width: 50%;
    height: 8%;
    font-size: 1rem;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

`;
const MainHero = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);

      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const backgroundImage = width <= 428 ? BackgroundHeroMobile : BackgroundHeroDesktop;


  return (
    <ContentHero>
      <BackgroundHeroStyled
        src={backgroundImage}
        alt='Imagem de aniversario 104 anos gazeta'
        priority
      />
      <AssineButton>EU QUERO!</AssineButton>
    </ContentHero>
  );
};

export default MainHero;
