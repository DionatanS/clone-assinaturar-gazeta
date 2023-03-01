import styled from 'styled-components';
import { Section, Wrapper, Subtitle } from '@/components/sharedstyles';

const WrapperStyled = styled(Wrapper)`
  padding-block: 65px;
`;
const SectionStyled = styled(Section)`
  background-color: ${({ theme }) => theme.colors.bgColorSecundary};
`;
const SubtitleStyled = styled(Subtitle)`
  text-transform: none;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 40px;
`;
const SubText = styled.p`
  text-align: center;
  margin-inline: auto;
  font-weight: 400;
  line-height: 150%;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktopSm}) {
    width: 70%;
  }
`;
const ListCard = styled.div`
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  margin: 50px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktopSm}) {
    flex-wrap: nowrap;
  }
`;

export { WrapperStyled, SectionStyled, SubtitleStyled, SubText, ListCard };
