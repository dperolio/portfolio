import Head from 'next/head';

import '../styles/globals.css'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dustin Perolio | Web Development Portfolio</title>
        <link rel='shortcut icon' href='/favicon.png' />
        <meta name='description' content='Creating beautifully functional websites.' />
        <meta name='theme-color' content='#000' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <meta property='og:type' content='website' />
        <meta property='og:title' content='Dustin Perolio | Web Development Portfolio' />
        <meta property='og:url' content='https://dperolio.com' />
        <meta property='og:site_name' content='Dustin Perolio | Web Development Portfolio' />
        <meta property='og:description' content='Creating beautifully functional websites.' />
        <meta property='og:image' content='/images/web.png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:site' content='@dustinperolio' />
        <meta property='twitter:title' content='Dustin Perolio | Web Development Portfolio' />
        <meta property='twitter:description' content='Creating beautifully functional websites.' />
        <meta property='twitter:image:src' content='/images/web.png' />
        <meta property='twitter:image:width' content='1200' />
        <meta property='twitter:image:height' content='630' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}