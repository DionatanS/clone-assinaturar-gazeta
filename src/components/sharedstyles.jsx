/**
 * Nossos componentes utilitários compartilhados para toda a aplicação.
 */

import styled from 'styled-components';

//Componentes compartilhados
const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.wrapperWidth}px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.sizes.wrapperGap}px;
  @media (min-width: 768px) {
    padding: 0 ${({ theme }) => theme.sizes.wrapperGap * 2}px;
  }
`;

const Section = styled.section`
  width: 100%;
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.bgColor};
`;

const SVG = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  fill: 'none',
})`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

const SROnly = styled.span`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktopMd}) {
    justify-content: space-between;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.desktopMd}) {
    gap: 30px;
  }
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const SiteMain = styled.main`
  max-width: ${({ theme }) => theme.sizes.siteMaxWidth}px;
  margin: 0 auto;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  text-align: ${({ align }) => (align ? align : 'center')};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.weights.bold};
`;

export { Wrapper, SROnly, SVG, SiteMain, Section, Subtitle, Row, Col };
