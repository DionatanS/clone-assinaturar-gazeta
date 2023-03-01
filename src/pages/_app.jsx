/**
 * Nosso componente principal "APP" que inicia todas as outras páginas do site.
 */
import DefaultLayout from '../layouts/default';

export default function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
