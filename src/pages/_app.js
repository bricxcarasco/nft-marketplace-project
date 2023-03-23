import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </I18nextProvider>
  );
}

export default App;
