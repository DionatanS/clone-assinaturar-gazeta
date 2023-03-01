import Image from 'next/image';
import GoogleSecurityBadgeImg from '@/assets/images/google-safe-browsing.png';
import styled from 'styled-components';
import { SROnly } from '../sharedstyles';

const ImageStyled = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const SecureBadgeGoogleIcon = ({ className }) => (
  <a href='#' target='_blank' rel='noopener noreferrer' className={className}>
    <ImageStyled
      src={GoogleSecurityBadgeImg}
      alt='Google Transparency Report (Navegação Segura)'
    />
    <SROnly>Google Transparency Report (Navegação Segura)</SROnly>
  </a>
);

export default SecureBadgeGoogleIcon;
