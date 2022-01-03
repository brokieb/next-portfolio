import { Modal, Button, Row, Col, Alert } from "react-bootstrap";
import htmlParser from "html-react-parser";
import { useG11n } from "next-g11n";
import dictionary from "app/locales/dictionary";
import { useRouter } from "next/router";
export default function SingleAppModal({ item, show, handleClose }) {
  const router = useRouter();
  const { translate: t } = useG11n(dictionary);
  return (
    <Modal size="xl" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{item.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-sm-column-reverse flex-lg-row gap-3">
          <Col className="flex-grow-1">
            <h2>{t("details")}</h2>

            <strong>{item.locale[router.locale].shortDesc}</strong>
            <hr />
            {htmlParser(item.locale[router.locale].description)}
          </Col>
          <Col className="flex-grow-1">
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
            {item.credentials && (
              <Alert variant="success">
                <Alert.Heading>Zaloguj się na testowe konto</Alert.Heading>
                <p>
                  Do tej aplikacji udostępniłem testowe dane logowania w celu
                  przetestowania aplikacji. Skorzystaj z poniższych danych żeby
                  zalogować się
                </p>
                <hr />
                <p>
                  Link: <strong>{item.credentials.loginLink}</strong>
                  <br />
                  Login: <strong>{item.credentials.username}</strong>
                  <br />
                  Hasło: <strong>{item.credentials.password}</strong>
                </p>
              </Alert>
            )}
          </Col>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {t("close")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
