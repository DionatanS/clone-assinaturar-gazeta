import styled from 'styled-components';
import { SVG } from '../sharedstyles';

const SVGStyled = styled(SVG)`
  width: 20px;
  height: 20px;
  fill: #007ded;
`;

const SecurityBadgeIcon = ({ className }) => (
  <SVGStyled viewBox='0 0 36.5 44.9' className={className}>
    <path d='M18.2,22.8a2.05,2.05,0,0,1,2.1,2.1,2.14,2.14,0,0,1-1.1,1.9v1.6h-2V26.8a2.21,2.21,0,0,1-.9-2.9,2.14,2.14,0,0,1,1.9-1.1m0-10.8a3.33,3.33,0,0,0-3.3,3.3v2.1h6.6V15.3A3.27,3.27,0,0,0,18.2,12M36.5,8.2V20.4c0,11.3-7.8,22-18.2,24.5A25.5,25.5,0,0,1,0,20.4V8.2L18.4,0ZM26.8,19.6a2.11,2.11,0,0,0-2.1-2.1H23.6V15.4a5.3,5.3,0,0,0-10.6,0v2.1H12a2.11,2.11,0,0,0-2.1,2.1V30.3A2.11,2.11,0,0,0,12,32.4H24.8a2.11,2.11,0,0,0,2.1-2.1Z'></path>
  </SVGStyled>
);

export default SecurityBadgeIcon;
