import styled from 'styled-components';
import Image from 'next/image';

const PlansStyled = styled.div`
  min-width: 270px;
  flex-basis: 32%;
  padding: 20px 25px;
  text-align: center;
  position: relative;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  
`;
const Title = styled.h3`
  font-size: 1.5rem;
  margin-top: 10px;
  margin-bottom: 24;
  font-family: 'Merriweather', serif;
  font-weight: bold;
`;
const TextCard = styled.p`
  font-size: 1rem;
  line-height: 150%;
  margin-top: 16px;
  text-align: center;
`;
const Exclusive = styled.p`
  line-height: 150%;
  font-size: 0.875rem;
  font-weight: 700;
  margin-top: 14px;
  margin-bottom: 45px;
`;
const Link = styled.a`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 20px;
  color: #3a66c8;
  cursor: pointer;
`;

const Plans = ({
  titleCard,
  textCard,
  emphasis,
  link,
  linkHref,
  textCardComplement,
  imagem,
}) => (
  <PlansStyled>
    <Image src={imagem} alt='' style={{ width: '79px', height: '79px' }} />
    <Title>{titleCard}</Title>
    <TextCard>{textCard}</TextCard>
    <TextCard>{textCardComplement}</TextCard>
    <Exclusive>{emphasis}</Exclusive>
    <Link
      aria-label='Link para conhecer o Clube de Descontos da Gazeta do Povo'
      href={linkHref}
    >
      {link}
    </Link>
  </PlansStyled>
);

export default Plans;
