import { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import {
  faExternalLinkSquareAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import SingleAppModal from "app/components/elements/modals/singleAppModal";
export default function SingleTimelineCard({ single }) {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        className="col-12 col-md-8 col-lg-5 pointer"
        onClick={handleShow}
      >
        <div
          className="single-timeline-content d-flex wow fadeInLeft"
          data-wow-delay="0.3s"
        >
          <div className="timeline-icon">
            <FontAwesomeIcon icon={faStar} className="icon" />
          </div>
          <div className="timeline-text">
            <h6>{single.title}</h6>
            <p>{single.locale[router.locale].shortDesc}</p>
            <hr className="m-2" />
            <small>
              <i>{single.locale[router.locale].techDesc}</i>
            </small>
          </div>
        </div>
      </motion.div>
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
