/**
 * Layout padrão, usado para composição e estilização das páginas.
 */

import GlobalStyle from '../components/globalStyles';
import { ThemeProvider } from 'styled-components';
import * as themes from '../themes';
import Head from 'next/head';
import TheHeader from '@/components/Structure/TheHeader';
import TheFooter from '@/components/Structure/TheFooter';

export default function DefaultLayout({ children }) {
  return (
    <ThemeProvider theme={themes.lightTheme}>
      <GlobalStyle />
      <Head>
        <title>Assine a Gazeta do Povo</title>
      </Head>
      <TheHeader />
      {children}
      <TheFooter />
    </ThemeProvider>
  );
}
