import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import GazetaCircleG from '../assets/icons/GazetaCircleG.svg';

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px 20px;
  gap: 20px;
  @media (max-width: ${({theme}) => theme.breakpoints.desktopSm}) {
    flex-direction: column;
  }
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 10px;
  @media (max-width: ${({theme}) => theme.breakpoints.desktopSm}) {
    align-items: center;
  }
`;
const Title = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
`;
const Text = styled.p`
  font-size: 1rem;
  line-height: 150%;
  @media (max-width: ${({theme}) => theme.breakpoints.desktopSm}) {
    text-align: center;
  }
`;
const CardLink = styled.a`
  color: #3a66c8;
  font-size: 18px;
  cursor: pointer;
  flex: 0 0 auto;
`;
const ImageStyled = styled(Image)`
  flex: 0 0 auto;
`;

const KnowMore = () => (
  <Card>
    <ImageStyled src={GazetaCircleG} alt='Logo da Gazeta com a letra G' />
    <CardBody>
      <Title>Quer saber mais?</Title>
      <Text>
        Conheça a história da Gazeta do Povo e o que move seu jeito único de
        fazer jornalismo.
      </Text>
    </CardBody>
    <CardLink href='https://assinaturas.gazetadopovo.com.br/por-que-assinar/?ref=home-assinaturas'>
      Quero saber mais
    </CardLink>
  </Card>
);

export default KnowMore;
