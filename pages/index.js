import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import profilePicture from "app/components/images/main-pic.png";
import LayoutTriangle from "app/components/layout/layoutTriangle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkSquareAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
const myLoader = ({ src, width, quality }) => {
  return `app/components/images/main-pic?${src}?w=${width}&q=${quality || 75}`;
};

export default function Home() {
  const myApps = [
    {
      image: profilePicture,
      header: "Client Manager",
      desc: "Disik ",
      technologies: ["next js", "react", "mongo db"],
    },
    {
      image: profilePicture,
      header: "Playerek",
      desc: "Disik ",
      technologies: [
        "next js",
        "react",
        "next js",
        "react",
        "next js",
        "react",
        "next js",
      ],
      links: {
        live: "asd",
      },
    },
    {
      image: profilePicture,
      header: "RCP",
      desc: "Disik ",
      technologies: ["next js", "react", "mongo db"],
      links: {
        github: "asd",
      },
    },
  ];
  return (
    <>
      <Container className="border-bottom">
        <div className="d-flex justify-content-around align-items-center flex-wrap my-3">
          <div className="mb-lg-5">
            <h1>Damian Woźniak</h1>
            <h4>Web developer</h4>
            <p className="pt-3"> dsad sad asd ad</p>
          </div>
          <div>
            <Image
              src={profilePicture}
              alt="Picture of the author"
              width={400}
              height={400}
            />
          </div>
        </div>
      </Container>
      <LayoutTriangle bg="gray-900" text="light">
        <h1>Moje aplikacje</h1>
        <Container className="my-4 d-flex flex-column gap-5">
          <div className="d-flex flex-wrap">
            {myApps.map((item, index) => {
              return (
                <Col xs={12} md={6} xl={4}>
                  <Col
                    className="bg-light text-dark d-flex flex-column p-4 gap-3 m-3"
                    key={index}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <FontAwesomeIcon icon={faFolder} size="3x" />
                      </div>
                      <div>
                        {item.links && (
                          <>
                            {item.links.github && (
                              <Button
                                variant="outline"
                                href={item.links.github}
                              >
                                <FontAwesomeIcon
                                  icon={faGithubSquare}
                                  size="2x"
                                />
                              </Button>
                            )}
                            {item.links.live && (
                              <Button variant="outline" href={item.links.live}>
                                <FontAwesomeIcon icon={faGlobe} size="2x" />
                              </Button>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    <div>
                      <h3>{item.header}</h3>
                      <p>{item.desc}</p>
                    </div>
                    <div className="d-flex flex-wrap">
                      {item.technologies.map((tech, techIndex) => {
                        return (
                          <small className="text-muted px-2 " key={techIndex}>
                            {tech}
                          </small>
                        );
                      })}
                    </div>
                  </Col>
                </Col>
              );
            })}
          </div>
          <div className="d-flex justify-content-end">
            <Button variant="success">Zobacz więcej...</Button>
          </div>
        </Container>
      </LayoutTriangle>
      <LayoutTriangle bg="gray-900" text="light">
        h3h3
      </LayoutTriangle>
    </>
  );
}
