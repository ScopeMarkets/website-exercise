import type { Metadata } from 'next';
import '@scopemarkets/react-ui-components/dist/index.css';
import './globals.css';
import './cookie-bot-override.css';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Rostro',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v" />
        <link rel="stylesheet" href="https://use.typekit.net/gzt7sjd.css" />
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="3086cb0f-f5d9-46ff-bb40-5fbd570812e3"
          data-blockingmode="auto"
          type="text/javascript"
          strategy="afterInteractive"
        />
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WSTCXXVV');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WSTCXXVV"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Navbar />
        {children}
        <Footer copyrightYear={new Date().getUTCFullYear().toString()} />
      </body>
    </html>
  );
}
