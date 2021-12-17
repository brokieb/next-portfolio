import { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faExternalLinkSquareAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import SingleAppModal from "app/components/elements/modals/singleAppModal";
export default function SingleTimelineCard({ single }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="col-12 col-md-8 col-lg-5 pointer" onClick={handleShow}>
        <div
          className="single-timeline-content d-flex wow fadeInLeft"
          data-wow-delay="0.3s"
        >
          <div className="timeline-icon">
            <FontAwesomeIcon icon={faStar} className="icon" />
          </div>
          <div className="timeline-text">
            <h6>{single.title}</h6>
            <p>{single.shortDesc}</p>
            <hr className="m-2" />
            <small>
              <i>{single.techDesc}</i>
            </small>
          </div>
        </div>
      </div>
      <SingleAppModal
        item={single}
        show={show}
        handleClose={() => {
          setShow(false);
        }}
      />
    </>
  );
}
