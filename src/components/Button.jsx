import styled from 'styled-components';

const Button = styled.a`
  display: flex;
  background-color: ${({ theme, type }) => theme.colors[type] || 'primary'};
  place-content: center;
  place-items: center;
  padding: 11px 20px 9px;
  font-size: 18px;
  color: #fff;
  font-weight: ${({ theme }) => theme.weights.bold};
  cursor: pointer;
  border-radius: 50px;
  /* min-width: 240px; */
  width: 100%;
  transition: opacity 250ms ease;
  :hover {
    opacity: 0.8;
  }
`;

export default Button;
