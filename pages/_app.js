import MainNavigation from "app/components/layout/navigation";
import "/styles/bootstrap.min.css";
import "/styles/globals.css";
import Head from "next/head";
import { SSRProvider } from "@react-aria/ssr";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Button, Container } from "react-bootstrap";
function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <div className="min-vh-100 d-flex flex-column gap-3">
        <Head>
          <title>DW</title>
          <meta
            name="description"
            content="Portfolio Web Developera Damiana Woźniaka"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainNavigation />
        <div className="flex-grow-1">
          <Component {...pageProps} className="w-100 h-100" />
        </div>

        <footer className="bg-dark py-2">
          <Container className="text-light">
            <p className="m-0">Damian Woźniak 2021</p>
          </Container>
        </footer>
      </div>
    </SSRProvider>
  );
}

export default MyApp;
