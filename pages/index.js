import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import profilePicture from "app/components/images/main-pic.png";
import LayoutTriangle from "app/components/layout/layoutTriangle";
import axios from "axios";
import SingleAppCard from "app/components/elements/cards/singleAppCard";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faArrowRight,
  faAt,
  faChevronDown,
  faMapMarked,
  faMouse,
  faPhone,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "app/components/layout/sectionHeader";
import Loading from "app/components/layout/loading";
import { useG11n } from "next-g11n";
import dictionary from "app/locales/dictionary";
import { getData as techsData } from "pages/api/getTechs";
import { getData as appsData } from "pages/api/getApps";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function Home({ setTitle, techs, apps }) {
  const { translate: t } = useG11n(dictionary);
  useEffect(() => {
    setTitle(t("homeNavLink"));
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
      <Container style={{ minHeight: "60vh" }}>
        <Row>
          <Col
            xs={12}
            md={6}
            className="mb-lg-5 d-flex justify-content-center flex-column"
          >
            <SectionHeader>
              <h1 className="m-0 d-inline-block">{t("hello")}</h1>
            </SectionHeader>
            <h4>Web developer</h4>
            <p className="pt-3">{t("helloMain")}</p>
            <hr />
            <p>{t("helloSufix")}</p>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <span>
              <Image
                src={profilePicture}
                alt="Picture of the author"
                width={400}
                height={400}
                className="img-thumbnail rounded"
                onLoad={() => {}}
              />
            </span>
          </Col>
        </Row>
      </Container>
      <div style={{ height: "100px" }} className="pt-5">
        <motion.div
          className="d-flex justify-content-center flex-column align-items-center display-4"
          animate={{
            paddingTop: [0, 5, 10, 20, 5, 0],
          }}
          transition={{
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
          }}
        >
          <FontAwesomeIcon icon={faMouse} size="1x" />
          <FontAwesomeIcon icon={faChevronDown} size="1x" />
        </motion.div>
      </div>
      <LayoutTriangle
        className="d-flex align-items-center"
        bg="gray-900"
        text="light"
        style={{ minHeight: "60vh" }}
      >
        <SectionHeader>
          <h1 className="m-0 d-inline-block">{t("appsContainerTitle")}</h1>
        </SectionHeader>
        <FadeInWhenVisible>
          <Container className="my-4 d-flex flex-column gap-5">
            <div className="d-flex flex-wrap justify-content-around">
              {apps.length > 0 ? (
                apps.map((item, index) => {
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
              ) : (
                <>{t("noDataToShow")}</>
              )}
              <div className="d-flex justify-content-end w-100 pt-3">
                <motion.span
                  animate={{
                    marginRight: [0, 10, 0],
                  }}
                  transition={{
                    times: 1,
                    repeat: Infinity,
                  }}
                >
                  <Link href="/projects">
                    <Button variant="success" size="sm">
                      {t("showMore")}
                      <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                    </Button>
                  </Link>
                </motion.span>
              </div>
            </div>
          </Container>
        </FadeInWhenVisible>
      </LayoutTriangle>
      <FadeInWhenVisible>
        <Container style={{ minHeight: "600px" }}>
          <SectionHeader>
            <h1 className="m-0 d-inline-block">{t("techsContainerTitle")}</h1>
          </SectionHeader>
          <div className="d-flex flex-wrap justify-content-around gap-5 pt-5">
            {techs.length > 0 ? (
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
            ) : (
              <>{t("noDataToShow")}</>
            )}
          </div>
        </Container>
      </FadeInWhenVisible>
      <LayoutTriangle
        className="d-flex align-items-center"
        bg="gray-900"
        text="light"
        style={{ minHeight: "60vh" }}
      >
        <Container className="my-4 d-flex flex-column gap-5 text-center">
          <div>
            <Link href="/about">
              <Button variant="success" size="lg">
                DOWIEDZ SIĘ WIĘCEJ O MNIE KLIKAJĄC W TEN PRZYCISK :)
              </Button>
            </Link>
          </div>
        </Container>
      </LayoutTriangle>
      <FadeInWhenVisible>
        <Container>
          <SectionHeader>
            <h1 className="m-0 d-inline-block">Dane kontaktowe</h1>
          </SectionHeader>
          <ul>
            <li>
              <FontAwesomeIcon icon={faSmile} className="me-2" />
              <p className="d-inline-block">Damian Woźniak</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarked} className="me-2" />
              <p className="d-inline-block">Kraków, Polska</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              <p className="d-inline-block">+48 575 654 814</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faAt} className="me-2" />
              <p className="d-inline-block">damian@wozniak1.pl</p>
            </li>
          </ul>
          <div>
            <p className="mb-0 d-flex">
              <a
                href="https://github.com/brokieb"
                target="_blank"
                className="d-flex align-items-center justify-content-center p-0 nav-link"
              >
                <Link
                  href="https://github.com/brokieb"
                  target="_blank"
                  className="d-flex align-items-center justify-content-center p-0"
                >
                  <span className="fa-stack fa-1x">
                    <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
                    <FontAwesomeIcon icon={faGithub} className="fa-stack-1x" />
                  </span>
                </Link>
                <Link
                  href="https://github.com/brokieb"
                  target="_blank"
                  className="d-flex align-items-center justify-content-center p-0"
                >
                  <span className="fa-stack fa-1x">
                    <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="fa-stack-1x"
                    />
                  </span>
                </Link>
              </a>
            </p>
          </div>
        </Container>
      </FadeInWhenVisible>
    </>
  );
}

export async function getStaticProps(context) {
  try {
    const apps = await appsData(true, 4);
    const techs = await techsData();
    return {
      props: {
        techs: JSON.parse(JSON.stringify(techs)),
        apps: JSON.parse(JSON.stringify(apps)),
      }, // will be passed to the page component as props
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        techs: [],
        apps: [],
      }, // will be passed to the page component as props
    };
  }
}
