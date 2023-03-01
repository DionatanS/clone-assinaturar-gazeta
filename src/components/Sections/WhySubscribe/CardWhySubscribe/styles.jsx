import styled from 'styled-components';
import Image from 'next/image';

const Card = styled.div`
  font-size: 1.125rem;
  line-height: 150%;
  text-align: center;
  margin-block: 15px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktopSm}) {
    flex-basis: 24%;
    margin-block: 50px;
  }
`;
const Text = styled.p``;
const ImageStyled = styled(Image)`
  width: 78%;
  height: auto;
`;
const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  width: 80px;
  height: 80px;
  padding: 5px;
  margin-inline: auto;

  background-color: #c8cdf3;
  border-radius: 50%;

  margin-bottom: 20px;
`;

export { Card, Text, ImageStyled, ContainerImage };
