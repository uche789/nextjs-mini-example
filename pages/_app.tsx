import { AppProps } from 'next/app';
import Head from "next/head";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cats Display</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
      </Head>

      <Header></Header>
      <Navigation></Navigation>
      <main className="container">
        <Component {...pageProps} />
      </main>
      <Footer></Footer>
    </>
  )
}

export default MyApp