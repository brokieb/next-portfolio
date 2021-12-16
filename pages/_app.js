import MainNavigation from "app/components/layout/navigation";
import "/styles/bootstrap.min.css";
import "/node_modules/devicon/devicon.min.css";
import "/styles/globals.css";
import Head from "next/head";
import { useState } from "react";
import LayoutTriangle from "app/components/layout/layoutTriangle";
import { SSRProvider } from "@react-aria/ssr";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "styles/timeline.css";
import { Button, Container } from "react-bootstrap";
function MyApp({ Component, pageProps }) {
  const [title, setTitle] = useState("'");
  return (
    <SSRProvider>
      <div className="min-vh-100  min-w-100 w-100 d-flex flex-column gap-3">
        <Head>
          <title>DW - {title}</title>
          <meta
            name="description"
            content="Portfolio Web Developera Damiana Woźniaka"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainNavigation />
        <div className="flex-grow-1">
          <Component
            {...pageProps}
            className="w-100 h-100"
            setTitle={setTitle}
          />
        </div>
        {/* <footer>
          <LayoutTriangle
            className="d-flex align-items-center"
            bg="gray-900"
            text="light"
            style={{ minHeight: "60vh" }}
            botHidden={true}
            minHeight="50px"
          >
            <p className="m-0">Damian Woźniak 2021</p>
          </LayoutTriangle>
        </footer> */}
      </div>
    </SSRProvider>
  );
}

export default MyApp;
