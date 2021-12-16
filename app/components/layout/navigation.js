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
                  <Link href="/projects" passHref>
                    <Nav.Link>Projekty</Nav.Link>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/technologies" passHref>
                    <Nav.Link>Technologie</Nav.Link>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/cv" passHref>
                    <Nav.Link>CV</Nav.Link>
                  </Link>
                </Nav.Item>
              </Nav>
              <Nav
                activeKey="/"
                className="d-flex flex-row justify-content-around justify-content-lg-end gap-5 gap-lg-3"
              >
                <Nav.Item>
                  <Nav.Link href="http://facebook.com" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="http://facebook.com" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="http://facebook.com" target="_blank">
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
