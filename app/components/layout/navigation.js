import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Navbar,
  Nav,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { useG11n } from "next-g11n";
import dictionary from "app/locales/dictionary";
export default function navigation() {
  const { translate: t } = useG11n(dictionary);
  const [navItem, setNavItem] = useState("/");
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="ftco_navbar ftco-navbar-light"
    >
      <Container>
        <Navbar.Brand href="/">DAMIAN WOŹNIAK</Navbar.Brand>
        <div className="social-media order-lg-last">
          <p className="mb-0 d-flex">
            <Nav.Link
              href="https://github.com/brokieb"
              target="_blank"
              rel="noreferrer"
              className="d-flex align-items-center justify-content-center p-0"
            >
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/damian-wozniak-br/"
              target="_blank"
              rel="noreferrer"
              className="d-flex align-items-center justify-content-center p-0"
            >
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </Nav.Link>
            <Nav.Link
              href="mailto:damian@wozniak1.pl"
              className="d-flex align-items-center justify-content-center p-0"
            >
              <FontAwesomeIcon icon={faAt} />
            </Nav.Link>
          </p>
        </div>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="d-block d-lg-none navbar-toggler d-flex gap-2"
          type="button"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
          Menu
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            activeKey={navItem}
            onSelect={(selectedKey) => setNavItem(selectedKey)}
            className="ml-auto mr-md-3"
          >
            <Nav.Item>
              <Link href="/" passHref>
                <Nav.Link>{t("homeNavLink")}</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/about" passHref>
                <Nav.Link>{t("aboutNavLink")}</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/projects" passHref>
                <Nav.Link>{t("projectsNavLink")}</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item className="d-flex align-items-center">
              <span>
                <Button
                  href="cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: "#F1C40F",
                    border: "#F1C40F",
                    color: "black",
                  }}
                  size="sm"
                >
                  CV
                </Button>
              </span>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
