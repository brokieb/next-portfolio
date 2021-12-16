import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import profilePicture from "app/components/images/main-pic.png";
import LayoutTriangle from "app/components/layout/layoutTriangle";
import axios from "axios";
import SingleAppCard from "app/components/elements/cards/singleAppCard";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "app/components/layout/sectionHeader";
const myLoader = ({ src, width, quality }) => {
  return `app/components/images/main-pic?${src}?w=${width}&q=${quality || 75}`;
};

export default function Home({ setTitle }) {
  const [data, setData] = useState({});
  const [techs, setTechs] = useState({});
  const [loadingData, setLoadingData] = useState(true);
  const [loadingTechs, setLoadingTechs] = useState(true);
  useEffect(() => {
    setTitle("Strona główna");
    axios
      .get("/api/getApps", {
        params: {
          mainPage: true,
        },
      })
      .then((item) => {
        setData(item.data);
        setLoadingData(false);
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get("/api/getTechs").then((item) => {
      setTechs(item.data);
      setLoadingTechs(false);
    });
  }, []);

  function FadeInWhenVisible({ children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <>
      <title>Strona główna</title>
      <FadeInWhenVisible>
        <Container style={{ minHeight: "60vh" }}>
          <Row>
            <Col
              xs={12}
              md={6}
              className="mb-lg-5 d-flex justify-content-center flex-column"
            >
              <SectionHeader>
                <h1 className="m-0 d-inline-block">Damian Woźniak</h1>
              </SectionHeader>
              <h4>Web developer</h4>
              <p className="pt-3">
                <strong>Witam na moim portfolio :) </strong> Jestem prężnie
                rozwijającym się twórcą aplikacji. Staram się rozwiązywać
                problemy moich klientów, tworząc dopasowane aplikacje w zakresie
                backendu i frontendu. Bardzo dobrze odnajduję się w tworzeniu
                struktur baz danych i organizacją ich zarówno SQL i noSQL.
                <hr />
                Bardzo polubiłem tworzenie stron internetowych w react, next JS
                - i w tą stronę się rozwijam
              </p>
            </Col>
            <Col xs={12} md={6}>
              <Image
                src={profilePicture}
                alt="Picture of the author"
                width={400}
                height={400}
              />
            </Col>
          </Row>
        </Container>
        <div style={{ height: "100px" }}>
          <motion.div
            className="d-flex justify-content-center display-4"
            animate={{
              paddingTop: [0, 5, 10, 20, 5, 0],
            }}
            transition={{
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
            }}
          >
            <FontAwesomeIcon icon={faChevronDown} size="xl" />
          </motion.div>
        </div>
      </FadeInWhenVisible>
      <LayoutTriangle
        className="d-flex align-items-center"
        bg="gray-900"
        text="light"
        style={{ minHeight: "60vh" }}
      >
        <SectionHeader>
          <h1 className="m-0 d-inline-block">Moje aplikacje</h1>
        </SectionHeader>
        <FadeInWhenVisible>
          <Container className="my-4 d-flex flex-column gap-5">
            <div className="d-flex flex-wrap justify-content-around">
              {loadingData ? (
                <>LOADI</>
              ) : (
                data.map((item, index) => {
                  return (
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.3 },
                      }}
                      className="col-xs-12 col-md-6 col-xl-4"
                      key={index}
                    >
                      <SingleAppCard item={item} />
                    </motion.div>
                  );
                })
              )}
            </div>
            <div className="d-flex justify-content-end">
              <motion.button
                animate={{
                  marginRight: [0, 10, 0],
                }}
                transition={{
                  times: 1,
                  repeat: Infinity,
                }}
                className="btn btn-success"
              >
                Zobacz więcej...
              </motion.button>
            </div>
          </Container>
        </FadeInWhenVisible>
      </LayoutTriangle>
      <FadeInWhenVisible>
        <Container style={{ minHeight: "600px" }}>
          <SectionHeader>
            <h1 className="m-0 d-inline-block">Technologie</h1>
          </SectionHeader>
          <div className="d-flex flex-wrap justify-content-around gap-5 pt-5">
            {loadingTechs ? (
              <>LOADI</>
            ) : (
              techs.map((item, index) => {
                return (
                  <motion.span
                    whileHover={{
                      scale: 1.1,
                      rotate: 10,
                      transition: { duration: 0.3 },
                    }}
                    className="d-flex flex-column align-items-center"
                    key={index}
                  >
                    <i className={`px-5 py-2 display-3 ${item.icon}`}></i>
                    {item.title}
                  </motion.span>
                );
              })
            )}
          </div>
        </Container>
      </FadeInWhenVisible>
    </>
  );
}
