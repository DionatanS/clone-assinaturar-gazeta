import { Subtitle, Wrapper } from '@/components/sharedstyles';
import styled from 'styled-components';
import AccordionDoubt from './AccordionDoubt';

const SubtitleDoubts = styled(Subtitle)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  text-transform: none;
  font-size: ${({ theme }) => 24 / theme.fonts.globalSize}rem;
`;

const WrapperDoubts = styled(Wrapper)`
  padding-top: 40px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktopSm}) {
    padding-bottom: 56px;
  }
`;

const TopicTitle = styled.h3(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
  fontSize: 18 / theme.fonts.globalSize + 'rem',
  fontWeight: theme.weights.bold,
  marginBottom: 18,
  paddingRight: 60,
}));

const Topics = styled.div`
  padding: 60px 0;
`;

const Topic = styled.div`
  &:not(:last-child) {
    margin-bottom: 45px;
  }
`;

const Accordion = styled(AccordionDoubt)`
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 15px 0 12px;
  overflow: hidden;
  :last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;

const AccordionTitle = styled.h4`
  cursor: pointer;
  position: relative;
  font-size: ${({ theme }) => 18 / theme.fonts.globalSize}rem;
  padding-right: 60px;
  ::after {
    content: '';
    display: block;
    position: absolute;
    width: 24px;
    height: 10px;
    top: 50%;
    right: 20px;
    transform: translateY(-50%) rotate(180deg);
    transform-origin: center center;
    background-image: url("data:image/svg+xml,%3Csvg width='33' height='9' viewBox='0 0 33 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28.512 0.542525C29.5445 -0.0294746 30.6709 -0.0294746 31.8912 0.542525C33.1115 1.02653 33.1115 1.55453 31.8912 2.12653L18.0928 8.46253C17.0603 8.94653 15.9339 8.94653 14.7136 8.46253L0.9152 2.12653C-0.305067 1.55453 -0.305067 1.02653 0.9152 0.542525C2.0416 0.0145253 3.21493 0.0145253 4.4352 0.542525L16.4032 5.69053L28.512 0.542525Z' fill='black'/%3E%3C/svg%3E%0A");
    background-size: 100%;
    background-repeat: no-repeat;
    transition: transform 300ms ease;
  }
  ${Accordion}[aria-expanded="true"] &::after {
    transform: translateY(-50%) rotate(0deg);
  }
`;

const AccordionBody = styled.div`
  color: gray;
  height: 0px;
  overflow: hidden;
  transition: 300ms ease;
`;

const AccordionBodyInner = styled.p`
  padding: 18px 0 18px;
`;

export {
  SubtitleDoubts,
  WrapperDoubts,
  TopicTitle,
  Topics,
  Topic,
  Accordion,
  AccordionTitle,
  AccordionBody,
  AccordionBodyInner,
};
