import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import i18nextConfig from '../../next-i18next.config';

class Document extends NextDocument {
  render() {
    const currentLocale = (this.props.__NEXT_DATA__.query.locale as string) || i18nextConfig.i18n.defaultLocale;
    const dir = currentLocale === 'ar' ? 'rtl' : 'ltr';

    return (
      <Html lang={currentLocale} dir={dir}>
        <Head>
          <link rel="icon" href="/favicon.ico?v" />
          <link rel="stylesheet" href="https://use.typekit.net/gzt7sjd.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
