import { Modal, Button, Row, Col } from "react-bootstrap";
import htmlParser from "html-react-parser";
export default function SingleAppModal({ item, show, handleClose }) {
  console.log(item, "@@");
  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{item.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <h2>Opis</h2>

            <strong>{item.shortDesc}</strong>
            <hr />
            {htmlParser(item.description)}
          </Col>
          <Col>
            <h2>Technologie</h2>
            <ul>
              {item.mainTechnologies.map((item, index) => {
                return (
                  <li key={index}>
                    <strong>{item}</strong>
                  </li>
                );
              })}
              {item.otherTechnologies.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Zamknij
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
