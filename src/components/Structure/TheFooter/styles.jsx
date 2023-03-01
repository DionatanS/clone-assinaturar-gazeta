import { Row, Wrapper } from '@/components/sharedstyles';
import styled from 'styled-components';

const Footer = styled.footer``;

const FooterContact = styled.div`
  background-color: ${({ theme }) => theme.colors.footerColor};
  color: ${({ theme }) => theme.colors.white};
`;

const FooterContactWrap = styled(Wrapper)`
  padding-top: 48px;
  padding-bottom: 68px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    justify-content: center;
    row-gap: 40px;
    padding-top: 45px;
    padding-bottom: 45px;
  }
`;

const FooterBadges = styled(Row)``;

const Doubts = ({ className }) => {
  return (
    <div className={className}>
      <h4>
        <a
          href='https://assinaturas.gazetadopovo.com.br/faq/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Dúvidas frequentes
        </a>
      </h4>
      <p>Ligue para nós: (41) 3321 5555</p>
    </div>
  );
};

const BadgeIcon = styled.span`
  display: block;
  width: 90px;
  height: 40px;
`;

const DoubtStlyed = styled(Doubts)`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  h4 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => 18 / theme.fonts.globalSize}rem;
    font-weight: ${({ theme }) => theme.weights.bold};
  }
  a:hover {
    text-decoration: underline;
  }
  p {
    font-size: ${({ theme }) => 18 / theme.fonts.globalSize}rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    align-items: center;
    row-gap: 20px;
  }
`;

const ColLabel = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLg}) {
    text-align: center;
    flex: 0 0 100%;
  }
`;

const PaymentBrandList = styled.ul`
  display: flex;
  gap: 6px;
`;

const PaymentBrandItem = styled.li`
  width: 48px;
  height: 30px;
`;

export {
  Footer,
  FooterContact,
  DoubtStlyed,
  FooterContactWrap,
  FooterBadges,
  BadgeIcon,
  ColLabel,
  PaymentBrandList,
  PaymentBrandItem,
};
