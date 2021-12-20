import { Modal, Button, Row, Col } from "react-bootstrap";
import htmlParser from "html-react-parser";
import { useG11n } from "next-g11n";
import dictionary from "app/locales/dictionary";
import { useRouter } from "next/router";
export default function SingleAppModal({ item, show, handleClose }) {
  const router = useRouter();
  const { translate: t } = useG11n(dictionary);
  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{item.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <h2>{t("details")}</h2>

            <strong>{item.locale[router.locale].shortDesc}</strong>
            <hr />
            {htmlParser(item.locale[router.locale].description)}
          </Col>
          <Col>
            <h2>{t("techsContainerTitle")}</h2>
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
          {t("close")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
