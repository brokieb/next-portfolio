import { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import {
  faExternalLinkSquareAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import SingleAppModal from "app/components/elements/modals/singleAppModal";
export default function SingleAppCard({ item }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col
        className="bg-light text-dark d-flex flex-column p-4 gap-3 m-3 pointer"
        onClick={() => setShow(true)}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <FontAwesomeIcon icon={faFolder} size="3x" />
          </div>
          <div>
            {item.links && (
              <>
                {item.links.github && (
                  <Button variant="outline" href={item.links.github}>
                    <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                  </Button>
                )}
                {item.links.liveLink && (
                  <Button variant="outline" href={item.links.liveLink}>
                    <FontAwesomeIcon icon={faGlobe} size="2x" />
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
        <div>
          <h3>{item.title}</h3>
          <p className="m-0">{item.shortDesc}</p>
          <p
            className="text-primary text-decoration-underline"
            onClick={() => setShow(true)}
          >
            Czytaj więcej...
          </p>
        </div>
        <div className="d-flex flex-wrap">
          {item.mainTechnologies.map((tech, techIndex) => {
            return (
              <small className="text-muted px-2 " key={techIndex}>
                {tech}
              </small>
            );
          })}
        </div>
      </Col>
      <SingleAppModal
        item={item}
        show={show}
        handleClose={() => {
          setShow(false);
        }}
      />
    </>
  );
}
