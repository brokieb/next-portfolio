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
import Footer from "app/components/layout/footer";
import { useG11n } from "next-g11n";
import dictionary from "app/locales/dictionary";

function MyApp({ Component, pageProps }) {
  const { translate: t } = useG11n(dictionary);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(t("loading"));
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
      setTitle(t("loading"));
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
          <>
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
            <Footer />
          </>
        )}
      </div>
    </SSRProvider>
  );
}

export default MyApp;
