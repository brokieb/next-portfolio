import MainNavigation from "app/components/layout/navigation";
import "/styles/bootstrap.min.css";
import "/node_modules/devicon/devicon.min.css";
import "/styles/globals.css";
import "/styles/navbar.css";
import Head from "next/head";
import { useState, useEffect } from "react";
import LayoutTriangle from "app/components/layout/layoutTriangle";
import { SSRProvider } from "@react-aria/ssr";
import { useRouter } from "next/router";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "styles/timeline.css";
import { motion } from "framer-motion";
import { Button, Container } from "react-bootstrap";
function MyApp({ Component, pageProps }) {
  const [title, setTitle] = useState("'");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
      setTitle("Ładowanie...");
    });
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, []);

  return (
    <SSRProvider>
      <div className="min-vh-100 w-100 d-flex flex-column gap-3 overflow-hidden">
        <Head>
          <title>DW - {title}</title>
          <meta
            name="description"
            content="Portfolio Web Developera Damiana Woźniaka"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainNavigation />
        {loading ? (
          <></>
        ) : (
          <motion.div
            className="flex-grow-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Component
              {...pageProps}
              className="w-100 h-100"
              setTitle={setTitle}
            />
          </motion.div>
        )}
        <footer style={{ zIndex: 6 }}>
          <LayoutTriangle
            className="d-flex align-items-center"
            bg="gray-900"
            text="light"
            style={{ minHeight: "60vh" }}
            botHidden={true}
            minHeight="50px"
          >
            <address>
              Damian Woźniak <br />
              damian@wozniak1.pl
              <br />
              Kraków, Poland
              <br />
            </address>
          </LayoutTriangle>
          <div className="bg-dark text-light px-5 pb-2 text-end">
            Damian Woźniak 2021 ©
          </div>
        </footer>
      </div>
    </SSRProvider>
  );
}

export default MyApp;
