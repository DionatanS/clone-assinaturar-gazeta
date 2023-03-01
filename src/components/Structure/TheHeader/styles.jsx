import styled from 'styled-components';
import { Wrapper } from '../../sharedstyles';

const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.colors.headerColor};
`;

const WrapperHeader = styled(Wrapper)`
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
`;

const DivGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const SecurityBadgeContainer = styled.div`
  display: flex;
  gap: 4px;
  @media (max-width: ${({theme}) => theme.breakpoints.mobileLg}) {
    display: none;
  }
`;

const SecurityBadgeText = styled.span`
  color: #808080;
  font-size: 16px;
  font-style: italic;
`;

const SignWhatsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #3a66c8;
  @media (max-width: ${({theme}) => theme.breakpoints.mobileLg}) {
    max-width: 110px;
  }
`;

export {
  HeaderStyled,
  WrapperHeader,
  DivGroup,
  SecurityBadgeContainer,
  SecurityBadgeText,
  SignWhatsContainer,
};
