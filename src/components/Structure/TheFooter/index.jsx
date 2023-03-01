import AmericaExpressIcon from '@/icons/AmericanExpressIcon';
import BradescoIcon from '@/icons/BradescoIcon';
import DinersClubIcon from '@/icons/DinersClubIcon';
import EloIcon from '@/icons/EloIcon';
import GazetaLogoIcon from '@/icons/GazetaLogo';
import ItauIcon from '@/icons/ItauIcon';
import MasterCardIcon from '@/icons/MasterCardIcon';
import SantanderIcon from '@/icons/SantanderIcon';
import SecureBadgeGoogleIcon from '@/icons/SecureBadgeGoogleIcon';
import SecureBadgeIcon from '@/icons/SecureBadgeIcon';
import VisaIcon from '@/icons/VisaIcon';
import { Col, Row, Wrapper } from '@/components/sharedstyles';
import {
  BadgeIcon,
  ColLabel,
  DoubtStlyed,
  Footer,
  FooterBadges,
  FooterContact,
  FooterContactWrap,
  PaymentBrandItem,
  PaymentBrandList,
} from './styles';

export default function TheFooter() {
  return (
    <Footer>
      <FooterBadges>
        <Wrapper>
          <Row>
            <Col>
              <BadgeIcon>
                <SecureBadgeIcon />
              </BadgeIcon>
              <BadgeIcon>
                <SecureBadgeGoogleIcon />
              </BadgeIcon>
            </Col>
            <Col>
              <ColLabel>Cartões de Crédito:</ColLabel>
              <PaymentBrandList>
                <PaymentBrandItem>
                  <VisaIcon />
                </PaymentBrandItem>
                <PaymentBrandItem>
                  <MasterCardIcon />
                </PaymentBrandItem>
                <PaymentBrandItem>
                  <DinersClubIcon />
                </PaymentBrandItem>
                <PaymentBrandItem>
                  <AmericaExpressIcon />
                </PaymentBrandItem>
                <PaymentBrandItem>
                  <EloIcon />
                </PaymentBrandItem>
              </PaymentBrandList>
            </Col>
            <Col>
              <ColLabel>Débido em conta:</ColLabel>
              <PaymentBrandList>
                <PaymentBrandItem>
                  <BradescoIcon />
                </PaymentBrandItem>
                <PaymentBrandItem>
                  <ItauIcon />
                </PaymentBrandItem>
                <PaymentBrandItem>
                  <SantanderIcon />
                </PaymentBrandItem>
              </PaymentBrandList>
            </Col>
          </Row>
        </Wrapper>
      </FooterBadges>
      <FooterContact>
        <FooterContactWrap>
          <DoubtStlyed />
          <GazetaLogoIcon color='#ffffff' />
        </FooterContactWrap>
      </FooterContact>
    </Footer>
  );
}
