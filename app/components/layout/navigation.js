import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Navbar,
  Nav,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";

function MainNavigation() {
  const [navItem, setNavItem] = useState("/");
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ zIndex: 6 }}
      >
        <Container>
          <Navbar.Brand href="#home">Damian Woźniak</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="w-100 d-flex align-items-start justify-content-lg-between flex-column flex-lg-row">
              <Nav
                activeKey={navItem}
                onSelect={(selectedKey) => setNavItem(selectedKey)}
                className="flex-1 w-100"
              >
                <Nav.Item>
                  <Link href="/" passHref>
                    <Nav.Link>Strona Główna</Nav.Link>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/about" passHref>
                    <Nav.Link>O mnie</Nav.Link>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/projects" passHref>
                    <Nav.Link>Projekty</Nav.Link>
                  </Link>
                </Nav.Item>
                <span className="d-flex align-items-center px-2">
                  <Button variant="success" size="sm">
                    Moje CV
                  </Button>
                </span>
              </Nav>
              <Nav
                activeKey="/"
                className="d-flex flex-row justify-content-around justify-content-lg-end gap-5 gap-lg-3"
              >
                <Nav.Item>
                  <Nav.Link href="https://github.com/brokieb" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="https://www.linkedin.com/in/damian-wozniak-br/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="mailto:damian@wozniak1.pl" target="_blank">
                    <FontAwesomeIcon icon={faAt} size="lg" />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavigation;
