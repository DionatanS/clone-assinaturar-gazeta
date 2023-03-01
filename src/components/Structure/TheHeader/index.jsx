import GazetaLogoIcon from '@/icons/GazetaLogo';
import SecurityBadgeIcon from '@/icons/SecurityBadgeIcon';
import WhatsAppIcon from '@/icons/WhatsAppIcon';
import { SROnly } from '../../sharedstyles';
import {
  DivGroup,
  HeaderStyled,
  SecurityBadgeContainer,
  SecurityBadgeText,
  SignWhatsContainer,
  WrapperHeader,
} from './styles';

export default function TheHeader() {
  return (
    <HeaderStyled>
      <WrapperHeader>
        <a
          href='http://gazetadopovo.com.br'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GazetaLogoIcon />
          <h1>
            <SROnly>Gazeta do Povo</SROnly>
          </h1>
        </a>
        <DivGroup>
          <SecurityBadgeContainer>
            <SecurityBadgeIcon />
            <SecurityBadgeText>Site 100% seguro</SecurityBadgeText>
          </SecurityBadgeContainer>
          <a
            href='https://api.whatsapp.com/send?phone=5541991052182'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SignWhatsContainer>
              <WhatsAppIcon />
              Assine pelo WhatsApp
            </SignWhatsContainer>
          </a>
        </DivGroup>
      </WrapperHeader>
    </HeaderStyled>
  );
}
